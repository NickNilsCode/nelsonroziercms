import styled from 'styled-components';

export const NewContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const MessageFormWrap = styled.div`
  width: 100vw;
  min-height: 387px;
  background-image: url("/images/bg-container-short-form-wrap.jpg");
  background-position: center;
  background-size: cover;
  color: #fff;
`;
export const MessageForm = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  max-width: 900px;
  margin: auto;
  h2 {
    width: 100%;
    font-size: 29px;
    text-align: center;
  }
  .buttonDisabled {
    filter: grayscale(100%);
  }
  @media(min-width: 900px){
    h2 {
      font-size: 40px;
    }
  }
`;
export const MessageLinks = styled.div`
  a {
    color: #fff;
    text-decoration: underline;
  }
`;
export const ContactLinks = styled.div`
  text-align: left;
  a {
    color: #833634;
    text-decoration: underline;
  }
`;
export const CategoryFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 12px auto;
`;
export const CategoryButton = styled.div`
  padding: 12px 16px;
  margin: 6px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  background-color: #fff;
  color: #8d8d8d;
  &.selectedCategory {
    background-color: #e0e0e0;
  }
  &:hover {
    background-color: #e0e0e0;
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const BlogDiv = styled.div`
  margin-bottom: 40px;
  text-align: left;
`;
