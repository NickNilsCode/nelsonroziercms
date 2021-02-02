import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper, Input, GoldButton } from '../styled-components/global';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  login = (e, obj) => {
    e.preventDefault();
    fetch('/api/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if(res.status === 200) return res.json();
      else if(res.status === 401) return { message: "Incorrect email or password"}
      else return {}
    })
    .then((data) => {
      console.log("auth response", data);
      if(data.message){
        alert(data.message);
      } else if(data._id){
        if(this.props.data.subscriptionID){
          this.setState({
            user: data
          }, () => {
            this.addSubscriptionToUser();
          })
        } else {
          window.location.href = "/myaccount"
        }
      }
    })
    .catch((err) => {
      console.log("login err", err);
    })
  }
  render(){
    const { switchDisplay, login } = this.props;
    const { email, password } = this.state;
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <LoginContent>
                <h2>Log In</h2>
                <form onSubmit={(e) => {login(e, this.state)}}>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    autoComplete="on"
                    onChange={(e) => {this.updateState(e, "email")}}
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
