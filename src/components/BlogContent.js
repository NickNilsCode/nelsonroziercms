import React, { Component, Fragment } from 'react';
import { SelectButton } from '../styled-components/components/blogform';
import { BlogContent } from '../styled-components/components/blogcontent';
import { TextArea, FlexDiv } from '../styled-components/global';

class BlogContentComponent extends Component {
  render(){
    const { blog, blog: { title, categories, author, share, share: { facebook, linkedin, twitter }, blurb, content, date }, updateState, updateAuthor, updateCategories, submitForm, updateContent, deleteContent, updateType} = this.props;
    return (
      <BlogContent>
        {
          content.map((a,i) => {
            return (
              <Fragment key={i}>
                <FlexDiv style={{justifyContent:"flex-start"}}>
                  <SelectButton
                    className={a.type == "h2" ? "selectedCategory" : ""}
                    onClick={() => {updateType(i, "h2")}}
                  >Header</SelectButton>
                  <SelectButton
                    className={a.type == "p" ? "selectedCategory" : ""}
                    onClick={() => {updateType(i, "p")}}
                  >Paragraph</SelectButton>
                  <SelectButton
                    className={a.type == "ul" ? "selectedCategory" : ""}
                    onClick={() => {updateType(i, "ul")}}
                  >List</SelectButton>
                  <SelectButton onClick={() => {deleteContent(i)}}>Delete</SelectButton>
                </FlexDiv>
                <TextArea
                  value={a.content}
                  onChange={(e) => {updateContent(i, e.currentTarget.value)}}
                />

              </Fragment>
            )
          })
        }
      </BlogContent>
    );
  }
}

export default BlogContentComponent;
