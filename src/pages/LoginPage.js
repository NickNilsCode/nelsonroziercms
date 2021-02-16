import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper, Input, GoldButton } from '../styled-components/global';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  login = (e) => {
    console.log(this.state);
    e.preventDefault();
    fetch('/api/auth', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if(res.status === 200) return res.json();
      else if(res.status === 401) return { message: "Incorrect username or password"}
      else return {}
    })
    .then((data) => {
      console.log("auth response", data);
      if(data.message){
        alert(data.message);
      } else if(data._id){
          window.location.href = "/list"
      }
    })
    .catch((err) => {
      console.log("login err", err);
    })
  }
  componentDidMount(){
    fetch('/api/getMe')
    .then((res) => {
      if(res.status === 200) return res.json();
      else return {}
    })
    .then((data) => {
      if(data){
        window.location.href = "/list"
      }
    })
    .catch((err) => {
      console.log("login err", err);
    })
  }
  render(){
    const { switchDisplay, login } = this.props;
    const { username, password } = this.state;
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <LoginContent>
                <h2>Log In</h2>
                <form onSubmit={this.login}>
                  <Input
                    placeholder="Username"
                    type="text"
                    value={username}
                    autoComplete="on"
                    onChange={(e) => {this.updateState(e, "username")}}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {this.updateState(e, "password")}}
                  />
                  <GoldButton type="submit">Log In</GoldButton>
                </form>
              </LoginContent>
            </ContentWrapper>
        </PageWrapper>
    );
  }
}

export default Login;
