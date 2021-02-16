import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ListContent, BlogLine } from '../styled-components/pages/list';
import { PageWrapper, ContentWrapper, GoldButton, RedButton } from '../styled-components/global';
import blogContent from '../data/blogs';

class List extends Component {
    constructor(props){
      super(props)
      this.state = {
        blogs: []
      }
    }
    deleteBlog = (e,id, title) => {
      e.preventDefault();
      if (window.confirm('Are you sure you want to delete the blog titled: ' + title + "?")) {
        fetch('/api/blogs/delete/' + id)
        .then((res) => {
          if(res.status === 200) return res.json();
          else return {}
        })
        .then((data) => {
          this.getBlogs();
        })
        .catch((err) => {
          console.log("login err", err);
        })
      }
    }
    getBlogs = () => {
      fetch('/api/blogs/getAll')
      .then((res) => {
        if(res.status === 200) return res.json();
        else return {}
      })
      .then((blogs) => {
        if(blogs){
          this.setState({ blogs })
        }
      })
      .catch((err) => {
        console.log("login err", err);
      })
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
      // })
      // .catch((err) => {
      //   console.log("login err", err);
      // })
      this.getBlogs();
    }
    render(){
      const { blogs } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ListContent>
                  <a href="/new"><RedButton>Create New Blog</RedButton></a>
                  <table>
                    <tr>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Author</th>
                      <th>Categories</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    {
                      blogs.length ?
                      blogs.map((a,i) => {
                        return (
                          <tr key={a}>
                            <td><a href={a.link}>{a.title}</a></td>
                            <td>{a.date}</td>
                            <td>{a.author}</td>
                            <td>{a.categories.join(', ')}</td>
                            <td><a href={'/edit/' + a._id}><GoldButton>Edit</GoldButton></a></td>
                            <td><a href="" onClick={(e) => {this.deleteBlog(e,a._id, a.title)}}><GoldButton>Delete</GoldButton></a></td>
                          </tr>
                        )
                      }) :
                      <tr>
                        <td>No Blogs To Be Found</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                      </tr>
                    }
                  </table>
                </ListContent>
              </ContentWrapper>
          </PageWrapper>
      );
    }
}

export default List;
