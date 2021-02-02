import React, { Component } from 'react';
import { BlogContent } from './'
import { BlogForm } from '../styled-components/components/blogform';
import { CategoryFlex, CategoryButton } from '../styled-components/pages/blog';
import { Input, BigGoldButton, TextArea } from '../styled-components/global';

import categoriesList from '../data/categories';
const authorList = ["John Green", "Ryan Nelson", "Clayton Christenson", "On behalf of Nelson & Rozier"]

class BlogFormComponent extends Component {
  render(){
    const { blog, blog: { title, categories, author, share, share: { facebook, linkedin, twitter }, blurb, content, date }, updateState, updateAuthor, updateCategories, submitForm, addContent, updateContent, deleteContent, updateType} = this.props;
    return (
      <BlogForm>
        <Input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => {updateState(e, "title")}}
        />
        <h2>Authors</h2>
        <CategoryFlex>
          {
            authorList.map((a,i) => {
              return (
                <CategoryButton
                  key={i}
                  onClick={() => {updateAuthor(a)}}
                  className={author == a ? "selectedCategory" : ""}
                >{a}</CategoryButton>
              )
            })
          }
        </CategoryFlex>
        <h2>Categories</h2>
        <CategoryFlex>
          {
            categoriesList.map((a,i) => {
              return (
                <CategoryButton
                  key={i}
                  onClick={() => updateCategories(a.name)}
                  className={categories.includes(a.name) ? "selectedCategory" : ""}
                >{a.name}</CategoryButton>
              )
            })
          }
        </CategoryFlex>
        <Input
          placeholder="Facebook Link"
          type="text"
          value={facebook}
          onChange={(e) => {updateState(e, "facebook")}}
        />
        <Input
          placeholder="Twitter Link"
          type="text"
          value={twitter}
          onChange={(e) => {updateState(e, "twitter")}}
        />
        <Input
          placeholder="LinkedIn Link"
          type="text"
          value={linkedin}
          onChange={(e) => {updateState(e, "linkedin")}}
        />
        <Input
          placeholder="Short Description"
          type="text"
          value={blurb}
          onChange={(e) => {updateState(e, "blurb")}}
        />
        <BlogContent
          blog={blog}
          addContent={addContent}
          deleteContent={deleteContent}
          updateContent={updateContent}
          updateType={updateType}
        />
      </BlogForm>
    );
  }
}

export default BlogFormComponent;
