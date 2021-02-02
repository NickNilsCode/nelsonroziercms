import React, { Component, Fragment } from 'react';
import { CategoryButton } from '../styled-components/pages/blog';
import { BlogContent } from '../styled-components/components/blogcontent';
import { Input } from '../styled-components/global';

class BlogContentComponent extends Component {
  render(){
    const { blog, blog: { title, categories, author, share, share: { facebook, linkedin, twitter }, blurb, content, date }, updateState, updateAuthor, updateCategories, submitForm, addContent, updateContent, deleteContent, updateType} = this.props;
    return (
      <BlogContent>
        {
          content.map((a,i) => {
            return (
              <Fragment key={i}>
                <CategoryButton
                  className={a.type == "h2" ? "selectedCategory" : ""}
                  onClick={() => {updateType(i, "h2")}}
                >Header 2</CategoryButton>
                <CategoryButton
                  className={a.type == "p" ? "selectedCategory" : ""}
                  onClick={() => {updateType(i, "p")}}
                >Paragraph</CategoryButton>
                <CategoryButton
                  className={a.type == "ul" ? "selectedCategory" : ""}
                  onClick={() => {updateType(i, "ul")}}
                >List</CategoryButton>
                <Input
                  type="text"
                  value={a.content}
                  onChange={(e) => {updateContent(i, e.currentTarget.value)}}
                />
                <CategoryButton onClick={() => {deleteContent(i)}}>Delete</CategoryButton>
              </Fragment>
            )
          })
        }
        <CategoryButton onClick={addContent}>Add Content</CategoryButton>
      </BlogContent>
    );
  }
}

export default BlogContentComponent;
