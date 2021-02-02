import React, { Component, Fragment } from 'react';
import { BlogSocial } from './'
import { Preview, BottomBox, BoxTitle, BoxContent } from '../styled-components/components/preview';
import mapBlog from '../helpers/mapBlog';
import mapPage from '../helpers/mapPage';
import blogData from '../data/blogs';


class PreviewComponent extends Component {
  render(){
    const { blog, blog: {
      title, categories, author, share, share: {
        facebook, linkedin, twitter
      }, blurb, content, date
    }} = this.props;
    return (
      <Preview>
        <h2>Previews</h2>
        <hr/>
        <h2>Side Bar</h2>
        <BottomBox>
          <BoxTitle>VISIT OUR BLOG</BoxTitle>
          <BoxContent>
            {
              blogData.map((a,i) => <a key={i} href={a.link}>{a.title}</a>)
            }
            <a href="/blog" className="readMore">
              <div>Read More <i className="fas fa-chevron-circle-right"/></div>
            </a>
          </BoxContent>
        </BottomBox>
        <hr/>
        <h2>Blog Main Page</h2>
        {
          // mapBlog([blog])
        }
        <hr/>
        <h2>Blog Page</h2>
        <h1>{title}</h1>
        <p><a href="/">{ author }</a> | { date } | {categories.join(', ')}</p>
        {
          mapPage(content)
        }
        {
          <BlogSocial share={share}/>
        }
      </Preview>
    );
  }
}

export default PreviewComponent;
