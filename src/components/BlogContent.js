import React, { Component, Fragment } from 'react';
import { SelectButton } from '../styled-components/components/blogform';
import { BlogContent } from '../styled-components/components/blogcontent';
import { TextArea, FlexDiv } from '../styled-components/global';

class BlogContentComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedContent: ["",""]
    }
  }
  selectContent = (e) => {
    if(e.target.selectionStart != e.target.selectionEnd){
      this.setState({
        selectedContent: [e.target.selectionStart, e.target.selectionEnd + 1]
      })
    }
  }
  addAnchor = (e) => {
    const { selectedContent } = this.state;
    if(
      typeof selectedContent[0] == "number" &&
      typeof selectedContent[1] == "number" &&
      selectedContent[0] != selectedContent[1]
    ){
      const { content, updateContent, index } = this.props;
      let newContent = content.content.split("")
      let link = prompt("copy and paste the link url here.")
      newContent.splice(selectedContent[0], 0, `<a href="${link}">`)
      newContent.splice(selectedContent[1], 0, `</a>`)
      updateContent(index, newContent.join(''))
      this.setState({ selectedContent: ["",""] })
    } else {
      alert("Make a selection! Highlight what you want to link.");
    }
  }
  addBold = (e) => {
    const { selectedContent } = this.state;
    if(
      typeof selectedContent[0] == "number" &&
      typeof selectedContent[1] == "number" &&
      selectedContent[0] != selectedContent[1]
    ){
      const { content, updateContent, index } = this.props;
      const { selectedContent } = this.state;
      let newContent = content.content.split("")
      newContent.splice(selectedContent[0], 0, `<strong>`)
      newContent.splice(selectedContent[1], 0, `</strong>`)
      updateContent(index, newContent.join(''))
      this.setState({ selectedContent: ["",""] })
    } else {
      alert("Make a selection! Highlight what you want to bold.");
    }
  }
  addBullet = (e) => {
    const { selectedContent } = this.state;
    if(
      typeof selectedContent[0] == "number" &&
      typeof selectedContent[1] == "number" &&
      selectedContent[0] != selectedContent[1]
    ){
      const { content, updateContent, index } = this.props;
      const { selectedContent } = this.state;
      let newContent = content.content.split("")
      newContent.splice(selectedContent[0], 0, `<li>`)
      newContent.splice(selectedContent[1], 0, `</li>`)
      updateContent(index, newContent.join(''))
      this.setState({ selectedContent: ["",""] })
    } else {
      alert("Make a selection! Highlight what you want to turn into a list item.");
    }
  }
  render(){
    const { content, updateContent, deleteContent, updateType, index } = this.props;
    return (
      <BlogContent>
          <FlexDiv style={{justifyContent:"space-between"}}>
            <FlexDiv>
              <SelectButton
                className={content.type == "h2" ? "selectedCategory" : ""}
                onClick={() => {updateType(index, "h2")}}
              >Header</SelectButton>
              <SelectButton
                className={content.type == "p" ? "selectedCategory" : ""}
                onClick={() => {updateType(index, "p")}}
              >Paragraph</SelectButton>
              <SelectButton
                className={content.type == "ul" ? "selectedCategory" : ""}
                onClick={() => {updateType(index, "ul")}}
              >List</SelectButton>
            </FlexDiv>
            <FlexDiv>
              <SelectButton color="#fff" primary title="Make it Bold. Highlight the text you want to make bold." onClick={(e) => this.addBold(e)}>Bold</SelectButton>
              <SelectButton primary title="Make a Link. Highlight the text you want to link." onClick={(e) => this.addAnchor(e)}><i className="fas fa-link"></i></SelectButton>
              <SelectButton primary title="Create bullet point for lists. Highlight the text you want to turn into bullet point." onClick={(e) => this.addBullet(e)}><i className="fas fa-list"></i></SelectButton>
            </FlexDiv>
            <SelectButton onClick={() => {deleteContent(i)}}>Delete</SelectButton>
          </FlexDiv>
          <TextArea
            value={content.content}
            onSelect={this.selectContent}
            onChange={(e) => {updateContent(index, e.currentTarget.value)}}
            id={'content-textarea-' + index}
          />
      </BlogContent>
    );
  }
}

export default BlogContentComponent;
