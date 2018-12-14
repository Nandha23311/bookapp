import React, { Component } from 'react';
// import HomeScreen from './homeScreen'
// import Subscribe from './subscribe'
import axios from 'axios';
import './App.css';
import Subscribe from './subscribe';

class SignUpAndLogin extends Component {
  constructor() {
    super();
    this.state = {
        loginUserName: "",
        userName: "",
        loginPassword: "",
        password: "",
        fullName: "",
        mobileNumber: "",
        goto: "login",
        user:{}
      }
    this.updateGoto = this.updateGoto.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  handleLogin(){
    let reqBody = {
      userName: this.state.loginUserName,
      password: this.state.loginPassword
    }
    if(this.state.loginUserName.length==0 || this.state.loginPassword.length==0){
      alert("invalid user input")
    }else{
      axios.post('http://localhost:1996/getCren', reqBody).then( (success) => {
        console.log('success')
        if(success){
          console.log('success')
          this.updateUser(success.data)
          this.updateGoto("home")
        }
      })
      .catch( (error) => {
        alert("invalid user")
        console.log('error');
      })
    }
  }
  handleSignup(){
    let reqBody = {
      userName: this.state.userName,
      password: this.state.password,
      fullname: this.state.fullname,
      mobileNumber: this.state.mobileNumber
    }
    if(this.state.userName.length==0 || this.state.password.length==0 || this.state.mobileNumber.length==0){
      alert("invalid user input")
    }else{
      axios.post('http://localhost:1996/signup', reqBody).then( (success) => {
      if(success){
        console.log('success')
        this.updateUser(success.data)
        this.updateGoto("subscribe")
      }
    })
    .catch( (error) => {
      alert("invalid user input")
      console.log('error');
    })
    }
  }
  updateGoto(value){
    this.setState({goto: value})
  }
  updateUser(value){
    this.setState({user: value})
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
  signupLoginRender=()=>{
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
                        type="password"
                        placeholder="Password"
                        style={{ marginTop: "5px" }}
                        value = {this.state.loginPassword}
                        onChange = {this.handleLoginPassword.bind(this)}
                      />
                      <button
                        type="submit"
                        value="Login"
                        className="button_with_rounded"
                        onClick= {this.handleLogin.bind(this)}
                      >
                      Submit
                    </button>
                    </div>
                </div>
                <h4 style={{textAlign:"center"}}>or</h4>
                <div className= "body_right_bottom">
                  <center><h3>Signup</h3></center>
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
                        type="password"
                        placeholder="Password"
                        style={{ marginTop: "5px" }}
                        value = {this.state.password}
                        onChange = {this.handlePassword.bind(this)}
                      />
                      <button
                        type="submit"
                        value="SignUp"
                        className="button_with_rounded"
                        onClick= {this.handleSignup.bind(this)}
                      >
                      Submit
                    </button>
                    </div>
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
    if(this.state.goto=="subscribe"){
      return(
        <Subscribe user = {this.state.user}/>
      )
    }else if(this.state.goto == "login"){
      //signupLoginRender()
      return(
        this.signupLoginRender()
      )
    }else if(this.state.goto == "home"){
      return(
        <HomeScreen user = {this.state.user} />
      )
    }

  }
}

export default SignUpAndLogin;
