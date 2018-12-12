import React, { Component } from 'react';
import HomeScreen from './homeScreen'
import axios from 'axios';
import './App.css';

class SignUpAndLogin extends Component {
  constructor() {
    super();
    this.state = {
        loginUserName: "",
        userName: "",
        loginPassword: "",
        password: "",
        fullname: "",
        mobileNumber: "",
        goto:false
      }
  }
  handleLogin(){
    let reqBody = {
      userName: this.state.loginUserName,
      password: this.state.loginPassword
    }
    axios.post('http://localhost:1996/getCren', reqBody).then( (success) => {
      if(success){
        console.log('success')
        this.updateGoto(true)
      }
    })
    .catch( (error) => {
      console.log('error');
    })

    
  }
  handleSignup(){
    let reqBody = {
      userName: this.state.userName,
      password: this.state.password,
      fullname: this.state.fullName,
      mobileNumber: this.state.mobileNumber
    }
    axios.post('http://localhost:1996/signup', reqBody).then( (success) => {
      if(success){
        console.log('success')
        this.updateGoto(true)
      }
    })
    .catch( (error) => {
      console.log('error');
    })
  }
  updateGoto(value){
    this.setState({goto: value})
  }
  handleFullName(event){
    this.setState({ fullname: event.target.value })
  }
  handleUserName(event){
    this.setState({ userName: event.target.value })
  }
  handlePassword(event){
    this.setState({ password: event.target.value })
  }
  handleMobileNumber(event){
    this.setState({ mobileNumber: event.target.value })
  }
  handleLoginUserName(event){
    this.setState({ loginUserName: event.target.value })
  }
  handleLoginPassword(event){
    this.setState({ loginPassword: event.target.value })
  }
  signupLoginRender(){
    return(
      <div>
          <div className= "full_screen">

            <div className= "top">
              <center><h1> Kalki Books Shop</h1></center>
            </div>
            <div className= "body">
              <div className= "body_left">
                <center><img className= "book_img" src="https://book.ponniyinselvan.in/assets/vikatan_edition.jpg" alt="PONNIYIN SELVAN" ></img></center>
              </div>
              <div className= "body_right">

                <div className= "body_right_top">
                  <center><h3>Login</h3></center>
                  <form onSubmit={this.handleLogin.bind(this)} >
                    <div className= "curved_view">
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Username"
                        value = {this.state.loginUserName}
                        onChange = {this.handleLoginUserName.bind(this)}
                      />
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Password"
                        style={{ marginTop: "5px" }}
                        value = {this.state.loginPassword}
                        onChange = {this.handleLoginPassword.bind(this)}
                      />
                      <button
                        type="submit"
                        value="Login"
                        className="button_with_rounded"
                      >
                      Submit
                    </button>
                    </div>
                  </form>
                </div>
                <h4 style={{textAlign:"center"}}>or</h4>
                <div className= "body_right_bottom">
                  <center><h3>Signup</h3></center>
                  <form onSubmit={this.handleSignup.bind(this)} >
                  <div className= "curved_view">
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Fullname"
                        value = {this.state.fullname}
                        onChange = {this.handleFullName.bind(this)}
                      />
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Mobilenumber"
                        style={{ marginTop: "5px" }}
                        value = {this.state.mobileNumber}
                        onChange = {this.handleMobileNumber.bind(this)}
                      />
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Username"
                        value = {this.state.userName}
                        onChange = {this.handleUserName.bind(this)}
                      />
                      <input
                        className="input_with_rounded"
                        type="text"
                        placeholder="Password"
                        style={{ marginTop: "5px" }}
                        value = {this.state.password}
                        onChange = {this.handlePassword.bind(this)}
                      />
                      <button
                        type="submit"
                        value="Login"
                        className="button_with_rounded"
                      >
                      Submit
                    </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            <div>
              <h2> Botttom</h2>
            </div>

          </div>
        </div>
    )
  }
  render() {
    if(this.state.goto){
      return(
        <HomeScreen />
      )
    }else{
      return(
        this.signupLoginRender()
      )
    }
  }
}

export default SignUpAndLogin;
