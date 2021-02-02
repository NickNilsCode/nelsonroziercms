import React, { Component } from 'react';
import { Header, BlogForm, Preview } from '../components';
import { PageWrapper, ContentWrapper, BigGoldButton } from '../styled-components/global';

class BlogPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: "",
        categories: [],
        author: "",
        date: new Date().toLocaleString('en-US'),
        share: {
          facebook: "",
          twitter: "",
          linkedin: ""
        },
        blurb: "",
        content: [{
          type: "h1",
          content: "this is content"
        }]
      }
    }

    submitForm = (e) => {
      e.preventDefault();
      console.log(this.state);
      fetch('/emailer', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(res => {
        window.location.href = "/list"
      })
      .catch(err => {
        alert("Something went wrong. Please contact Nelson Rozier directly via email or telephone. We are sorry for the inconvenience.")
      })
    }
    updateState = (e, prop) => {
      let obj = {};
      obj[prop] = e.currentTarget.value;
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
      arr.push({ type: "h1", content: "" })
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
                    updateAuthor={this.updateAuthor}
                    updateCategories={this.updateCategories}
                    submitForm={this.submitForm}
                    updateContent={this.updateContent}
                    addContent={this.addContent}
                    deleteContent={this.deleteContent}
                    updateType={this.updateType}
                  />
                  <BigGoldButton type="submit">Save Blog</BigGoldButton>
                  <hr/>
                  <Preview blog={this.state}/>
                  <BigGoldButton type="submit">Save Blog</BigGoldButton>
                </form>
              </ContentWrapper>
          </PageWrapper>
      );
    }
}

export default BlogPage;
