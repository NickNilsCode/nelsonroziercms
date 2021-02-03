import styled from 'styled-components';
import { gold, red, yellow } from './colors';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 40px 16px;
  min-height: calc(100vh - 89px - 145px);
  max-width: 900px;
  margin: auto;
  text-align: center;
  position: relative;
  display: block;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-between;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  p, ul, li, .goldBack {
    text-align: left;
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
  }
  h1 {
    text-align: left;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  h2 {
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  select {
    background: #f7f7f7;
    padding: 12px;
    width: 100%;
    margin: 0 0 12px 0;
    font-size: 16px;
    border: 1px solid #8d8d8d;
    border-radius: 1px;
    line-height: 1.5;
  }
  a {
    color: ${red};
    transition: color 300ms ease 0ms;
    text-decoration: underline;
  }
  form {
    input, textarea {
      background: #f7f7f7;
    }
  }
  a:hover {
    color: ${gold};
  }
  .goldBack {
    background-color: ${gold};
    color: #fff;
    padding: 20px;
  }
  .boxedList {
    display: flex;
    flex-direction: column;
    padding: 12px;
    padding-left: 24px;
    margin: 12px 0;
    border: 1px solid #000;
    @media (min-width: 600px){
      flex-wrap: wrap;
      max-height: 300px;
      li {
        width: calc(50% - 16px);
      }
    }
  }
  &.blogContent {
    @media (min-width: 900px){
      width: calc(100% - 277px - 85px);
    }
  }
`;

export const GoldButton = styled.button`
  background: ${gold};
  padding: 12px 20px;
  margin: 12px auto;
  color: #fff;
  font-size: 17px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: max-content;
  transition: background-color 300ms ease 0ms;
  &:hover {
    cursor: pointer;
    background-color: #7c3230;
  }
`;
export const BigGoldButton = styled.button`
  background: ${gold};
  padding: 12px 20px;
  margin: 12px auto;
  color: #7c3230;
  font-size: 19px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  transition: background-color 300ms ease 0ms;
  &:hover {
    cursor: pointer;
    background-color: #7c3230;
    color: #fff;
  }
`;
export const RedButton = styled.button`
  background-color: ${red};
  padding: 5px 15px;
  margin: 24px 0 8px 0;
  color: #fff;
  font-size: 15px;
  font-weight: 600px;
  border: none;
  line-height: 26px;
  width: max-content;
  transition: background-color 300ms ease 0ms;
  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`;

export const FBButton = styled.button`
  background-color: #3b5998;
  border-radius: 3px;
  height: 30px;
  width: 30px;
  border: none;
  transition: background-color 300ms ease 0ms;
  display: block;
  i {
    color: #fff;
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    background-color: #4674b5;
  }
`;
export const Input = styled.input`
  background: #fff;
  padding: 12px;
  width: 100%;
  margin: 0 0 12px 0;
  font-size: 16px;
  border: 1px solid #8d8d8d;
  border-radius: 1px;
  line-height: 1.5;
`;

export const TextArea = styled.textarea`
  background: #fff;
  padding: 12px;
  width: 100%;
  height: 174px;
  margin: 12px 0;
  font-size: 16px;
  border: 1px solid #8d8d8d;
  border-radius: 1px;
`;

export const HalfSize = styled.div`
  width: 100%;
  @media (min-width: 900px){
    width: 444px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  justify-content: space-between;
`;
