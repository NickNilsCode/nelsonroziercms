import React, { Component } from 'react';
import { Header, BlogForm, Preview } from '../components';
import { PageWrapper, ContentWrapper, BigGoldButton } from '../styled-components/global';

class BlogPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        _id: props.data.id || "",
        edit: props.data.edit || false,
        title: "Testing",
        categories: [],
        author: "",
        link: "",
        share: {
          facebook: "",
          twitter: "",
          linkedin: ""
        },
        blurb: "",
        content: [{
          type: "p",
          content: ""
        }]
      }
    }
    addBlog = (blog) => {
      delete blog._id;
      delete blog.edit;
      fetch('/api/blogs/add', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
      })
      .then(res => res.json())
      .then(res => {
        alert("Blog Added Successfully!")
        window.location.href = "/list"
      })
      .catch(err => {
        alert("Something went wrong. Please contact Administrator directly via email or telephone. We are sorry for the inconvenience.")
      })
    }

    editBlog = (blog) => {
      delete blog.edit;
      fetch('/api/blogs/update/' + blog._id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
      })
      .then(res => res.json())
      .then(res => {
        alert("Blog Successfully Updated!")
        window.location.href = "/list"
      })
      .catch(err => {
        alert("Something went wrong. Please contact Administrator directly via email or telephone. We are sorry for the inconvenience.")
      })
    }

    submitForm = (e) => {
      e.preventDefault();
      let blog = {...this.state};
      if(blog.edit){
        this.editBlog(blog)
      } else {
        this.addBlog(blog)
      }
    }
    updateState = (e, prop) => {
      let obj = {};
      obj[prop] = e.currentTarget.value;
      this.setState(obj);
    }
    updateShare = (e, prop) => {
      let obj = { share: {} };
      obj.share[prop] = e.currentTarget.value;
      this.setState(obj);
    }
    updateAuthor = (author) => {
      this.setState({ author });
    }
    updateCategories = (value) => {
      let { categories } = this.state;
      let index = categories.findIndex((a) => a == value);
      if(index != -1) categories.splice(index, 1)
      else  categories.push(value)
      this.setState({ categories });
    }
    updateContent = (i, value) => {
      let val = this.state.content;
      val[i].content = value;
      this.setState({ content: val });
    }
    addContent = () => {
      let arr = this.state.content;
      arr.push({ type: "h2", content: "" })
      this.setState({ content: arr });
    }
    deleteContent = (i) => {
      let arr = this.state.content;
      arr.splice(i,1)
      this.setState({ content: arr });
    }
    updateType = (i, value) => {
      let val = this.state.content;
      val[i].type = value;
      this.setState({ content: val });
    }
    componentDidMount(){
      // fetch('/api/getMe')
      // .then((res) => {
      //   if(res.status === 200) return res.json();
      //   else return {}
      // })
      // .then((data) => {
      //   if(!data){
      //     window.location.href = "/"
      //   }
      if(this.props.data.id){
        console.log("crash", this.props.data.id);
        fetch('/api/blogs/getOne/' + this.props.data.id)
        .then((res) => {
          if(res.status === 200) return res.json();
          else return {}
        })
        .then((blog) => {
          if(blog){
            this.setState({ ...blog })
          }
        })
        .catch((err) => {
          console.log("login err", err);
        })
      }
      // })
      // .catch((err) => {
      //   console.log("login err", err);
      // })
    }
    render(){
      const { title, categories, author, facebook, twitter, linkedin, blurb, content } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <h1>New Blog</h1>
                <form onSubmit={this.submitForm}>
                  <BlogForm
                    blog={this.state}
                    updateState={this.updateState}
                    updateShare={this.updateShare}
                    updateAuthor={this.updateAuthor}
                    updateCategories={this.updateCategories}
                    submitForm={this.submitForm}
                    updateContent={this.updateContent}
                    addContent={this.addContent}
                    deleteContent={this.deleteContent}
                    updateType={this.updateType}
                  />
                  <BigGoldButton type="submit">Save Blog</BigGoldButton>
                </form>
              </ContentWrapper>
              <hr/>
              <Preview blog={this.state}/>
              <BigGoldButton type="submit">Save Blog</BigGoldButton>
          </PageWrapper>
      );
    }
}

export default BlogPage;
