import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {signIn} from '../../store/actions/authActions'

class LoginBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        userID: '',
        password: ''
      };
    }
    onEmailChange(e){
      this.setState({
        userID: e.target.value
      });
    }
    onPasswordChange(e){
      this.setState({
        password: e.target.value
      });
    }
    submitLogin(e){
      e.preventDefault();
      console.log("Object is "+this.state);
      console.log("User Name "+ this.state.userID);
      console.log(this.state.password);
      this.props.signIn(this.state);
      this.props.history.push("/");
    //   axios.get(`http://localhost:3030/user/${this.state.userID}`)
    //     .then(response => {
    //       console.log(response);
    //     })
    }
    render(){
      const { auth, authError } = this.props;
      console.log("Auth error is "+ authError +" Auth is :"+auth);
      
      // if (authError == null) return <Redirect to='/'/>

      return(
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            <div className="input-group">
              <label htmlFor="user_name">User Name</label>
              <input className="login-input"  type="text" placeholder="User Name" onChange={this.onEmailChange.bind(this)}></input>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input className="login-input" type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)}></input>
            </div>
          </div>
          <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginBox));