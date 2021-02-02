import styled from 'styled-components';
export const BlogSocial = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SocialButton = styled.a`
  text-decoration: none;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 12px;
  border-radius: 4px;
  &.blogFacebook {
    background-color: #365089;
    text-decoration: none;
    .socialLogo {
      background-color: #3c5998;
    }
  }
  &.blogLinkedin {
    background-color: #196fa2;
    text-decoration: none;
    .socialLogo {
      background-color: #1c7cb4;
    }
  }
  &.blogTwitter {
    background-color: #1a9ad5;
    text-decoration: none;
    .socialLogo {
      background-color: #1daced;
    }
  }
  &:hover {
    transition: background-color 0.5s;
    cursor: pointer;
    i {
      left: 40px;
    }
    i:first-of-type {
      left: 0px;
    }
    .socialLogo {
      background-color: transparent;
    }
  }
`;
export const Logo = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  transition: background-color 0.5s;
  border-radius: 4px 0 0 4px
  i {
    width: 40px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    transition: left 0.5s;
  }
  i:first-of-type {
    left: -40px;
  }
`;
export const SocialText = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
`;
