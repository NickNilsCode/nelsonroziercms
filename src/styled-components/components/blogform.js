import styled from 'styled-components';
export const BlogForm = styled.div`
  width: 100%;
  text-align: center;
`;

export const SelectButton = styled.div`
  padding: 12px 16px;
  margin: 0 6px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  background-color: #fff;
  color: #8d8d8d;
  width: max-content;
  &.selectedCategory {
    background-color: #e0e0e0;
  }
  &:hover {
    background-color: #e0e0e0;
    opacity: 0.8;
    cursor: pointer;
  }
`;
