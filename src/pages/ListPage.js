import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ListContent, BlogLine } from '../styled-components/pages/list';
import { PageWrapper, ContentWrapper, GoldButton, RedButton } from '../styled-components/global';
import blogContent from '../data/blogs';

class List extends Component {
    render(){
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
                    </tr>
                    {
                      blogContent.map((a,i) => {
                        return (
                          <tr key={a}>
                            <td><a href={a.link}>{a.title}</a></td>
                            <td>{a.date}</td>
                            <td>{a.author}</td>
                            <td>{a.categories.join(', ')}</td>
                            <td><a href={'/edit/' + a._id}><GoldButton>Edit</GoldButton></a></td>
                          </tr>
                        )
                      })
                    }
                  </table>
                </ListContent>
              </ContentWrapper>
          </PageWrapper>
      );
    }
}

export default List;
