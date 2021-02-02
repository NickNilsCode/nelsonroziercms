import React, { Component } from 'react';
import { BlogSocial, SocialButton, Logo, SocialText } from '../styled-components/components/blogSocial';

class BlogSocialComponent extends Component {
  render(){
    const { facebook, linkedin, twitter } = this.props.share
    return (
      <BlogSocial>
        <SocialButton href={facebook} className="blogFacebook">
          <Logo className="socialLogo">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-facebook-f"></i>
          </Logo>
          <SocialText>Facebook</SocialText>
        </SocialButton>
        <SocialButton href={linkedin} className="blogLinkedin">
          <Logo className="socialLogo">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-linkedin-in"></i>
          </Logo>
          <SocialText>LinkedIn</SocialText>
        </SocialButton>
        <SocialButton href={twitter} className="blogTwitter">
          <Logo className="socialLogo">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-twitter"></i>
          </Logo>
          <SocialText>Twitter</SocialText>
        </SocialButton>
      </BlogSocial>
    );
  }
}

export default BlogSocialComponent;
