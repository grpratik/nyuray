import React, {Component} from 'react'
import { connect } from 'react-redux'
import {signUp} from './../../store/actions/authActions'


class RegisterBox extends Component{
    constructor(props){
      super(props);
      this.state = { username: "", password: "", email: "", mobilenum: "", pwdState: null, errors: [],};
    }
    //Add New Error Object to the array {elm: msg}
  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }
  //Remove a specific element from the array 
  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      //Add all elements from the prev array to the new one that has a different element
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return {errors: newArr};
    });
  }
  //Update Username, password, and email on change event 
  onUsernameChange(e) {
    this.setState({username: e.target.value});
    //We want to clear the error when ever the user type something new 
    this.clearValidationErr("username");
  }
  
  onEmailChange(e) {
    this.setState({email: e.target.value});
    this.clearValidationErr("email");
  }
  
  onPasswordChange(e) {
    this.setState({password: e.target.value});
    this.setState({pwdState: "weak"});
    if (e.target.value.length > 8 && e.target.value.length < 12){
      this.setState({
        pwdState: "medium"
      });
    }else if (e.target.value.length >= 12 ){
      this.setState({
        pwdState: "strong"
      });
    }
    this.clearValidationErr("password");
  }
  onMobileChange(e){
    this.setState({mobilenum: e.target.value});
    this.clearValidationErr("mobilenum");
  }
  submitRegister(e){
      e.preventDefault();
      //Check for all input fields and show errors if empty (you can implement other cases!)
      if (this.state.username === "") {
        this.showValidationErr("username", "Username Cannot be empty!");
      }
      if (this.state.email === "") {
        this.showValidationErr("email", "Email Cannot be empty!");
      }
      if (this.state.password === "") {
        this.showValidationErr("password", "Password Cannot be empty!");
      }
      if (this.state.mobilenum === ""){
        this.showValidationErr("Mobile Num", "Mobile Number can't be empty");
      }

      console.log("UserName :"+ this.state);
      console.log("UserName :"+ this.state.password);
      console.log("UserName :"+ this.state.mobilenum);
      console.log("UserName :"+ this.state.email);

      this.props.signUp(this.state);
      
      

  }
  render(){
    const {auth, authError} = this.props;
    console.log("Auth error is :"+auth.uid);
    
    let pwdWeak = false, pwdMedium = false, pwdStrong = false;
    if (this.state.pwdState === "weak"){
      pwdWeak = true;
    }else if(this.state.pwdState === "medium"){
      pwdWeak = true;
      pwdMedium = true;
    }else if (this.state.pwdState === "strong"){
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    //NULL by default (help us check when rendering)
    let usernameErr = null,
    passwordErr = null,
    emailErr = null,
    mobilenumErr = null;
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
    //Assign the validation error message 
    if (err.elm === "username") {
        usernameErr = err.msg;
    }
    if (err.elm === "password") {
        passwordErr = err.msg;
    }
    if (err.elm === "email") {
        emailErr = err.msg;
    }
    if (err.elem === "mobilenum"){
        mobilenumErr = err.msg;
    }
    }
    return(
        <div className="inner-container">
            <div className="header">
            Register
            </div>
            <div className="box">
            <div className="input-group">
                <label htmlFor="user_name">User Name</label>
                <input className="login-input" type="text" name="user_name" placeholder="User Name" id="userNameId" onChange={this.onUsernameChange.bind(this)}></input>
                <small className="danger-error">{usernameErr ? usernameErr : ""}
                </small>
            </div>
            <div className="input-group">
                <label htmlFor="email_id">Email Id</label>
                <input className="login-input" type="text" name="email_id" id="emailId" placeholder="Email ID" onChange={this.onEmailChange.bind(this)}></input>
                <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </div>
            <div className="input-group">
                <label htmlFor="mobile_num">Mob. No.</label>
                <input className="login-input" type="number" name="mobile_num" id="mobileNumId" placeholder="Mobile Number" onChange={this.onMobileChange.bind(this)}></input>
                <small className="danger-error">{mobilenumErr ? mobilenumErr : ""}</small>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input className="login-input" type="password" name="password" id="passwordId" placeholder="Password" onChange={this.onPasswordChange.bind(this)}></input>
                <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
                {this.state.password && <div className="password-state">
                  <div
                    className={"pwd pwd-weak " + (pwdWeak
                    ? "show"
                    : "")}></div>
                  <div
                    className={"pwd pwd-medium " + (pwdMedium
                    ? "show"
                    : "")}></div>
                  <div
                    className={"pwd pwd-strong " + (pwdStrong
                    ? "show"
                    : "")}></div>
                  </div>
                }
                </div>
            </div>
            <button type="button" onClick={this.submitRegister.bind(this)}>Register</button>
            <div className="red-txt center">
              {authError ? <p>{authError}</p> : null}
            </div>
        </div>
    ) 
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterBox);