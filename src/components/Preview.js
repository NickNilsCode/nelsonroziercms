import React, { Component, Fragment } from 'react';
import { BlogSocial } from './'
import { Preview, BottomBox, BoxTitle, BoxContent } from '../styled-components/components/preview';
import { Content } from '../styled-components/global'
import mapBlog from '../helpers/mapBlog';
import mapPage from '../helpers/mapPage';
import blogData from '../data/blogs';


class PreviewComponent extends Component {
  render(){
    const { blog, blog: {
      title, categories, author, share, share: { facebook, linkedin, twitter }, blurb, content, date
    }} = this.props;
    return (
      <Preview>
        <h2 className="previewTop">Previews</h2>
        <hr/>

        <h2 className="previewHeader">Blog Page</h2>
        <Content className="previewBlock">
          <h1>{title}</h1>
          <p><a href="/">{ author }</a> | { date } | {categories.join(', ')}</p>
          { mapPage(content) }
          <BlogSocial share={share}/>
        </Content>
        <hr/>

        <h2 className="previewHeader">Blog Main Page</h2>
        <div className="previewBlock">
          { mapBlog([blog, ...blogData]) }
        </div>
        <hr/>

        <h2 className="previewHeader">Side Bar</h2>
        <BottomBox className="previewBlock" style={{maxWidth: "300px"}}>
          <BoxTitle>VISIT OUR BLOG</BoxTitle>
          <BoxContent>
            { [blog, ...blogData].slice(0,2).map((a,i) => <a key={i} href={a.link}>{a.title}</a>) }
            <a href="/blog" className="readMore">
              <div>Read More <i className="fas fa-chevron-circle-right"/></div>
            </a>
          </BoxContent>
        </BottomBox>
        <hr/>

        <h2 className="previewHeader">Responsive Bottom Section</h2>
        <BottomBox className="previewBlock">
          <BoxTitle>VISIT OUR BLOG</BoxTitle>
          <BoxContent>
            { [blog, ...blogData].slice(0,2).map((a,i) => <a key={i} href={a.link}>{a.title}</a>) }
            <a href="/blog" className="readMore">
              <div>Read More <i className="fas fa-chevron-circle-right"/></div>
            </a>
          </BoxContent>
        </BottomBox>
        <hr/>
      </Preview>
    );
  }
}

export default PreviewComponent;
