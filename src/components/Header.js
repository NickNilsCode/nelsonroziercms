import React, { Component } from 'react';
import { Header } from '../styled-components/components/header';

class HeaderComponent extends Component {
  render(){
    return (
      <Header>
        <a href="/list"><img src="/api/images/brand-logo.png"/></a>
        <h1>Blog Management Tool</h1>
      </Header>
    );
  }
}

export default HeaderComponent;
