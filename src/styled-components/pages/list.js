import styled from 'styled-components';
import { gold, red, yellow } from '../colors';

export const ListContent = styled.div`
  width: 100%;
  text-align: right;
  a {
    color: ${red};
    transition: color 300ms ease 0ms;
    text-decoration: underline;
  }
  a:hover {
    color: ${gold};
  }
  table {
    border-collapse: collapse;
  }
  td, th {
    text-align: left;
    padding: 12px 16px;
    border: 1px solid #8d8d8d;
  }
`;
