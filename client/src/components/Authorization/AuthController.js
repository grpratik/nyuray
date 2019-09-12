import React, {Component} from 'react'
import LoginBox from '../Authorization/LoginBox'
import RegisterBox from '../Authorization/RegisterBox'

class AuthController extends Component{
    constructor(props){
      super(props);
      this.state = {
        isLoginOpen:true, 
        isRegisterOpen:false,
        userID: "pratik",
        password: ""
      };
    }
    showLoginBox(e){
      this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    showRegisterBox(props){
      this.setState({isRegisterOpen: true, isLoginOpen: false});
    }
    openNav(e){
      
    }
    render(params) {
      return(
        <div className="rootContainer">
          <div className="login-box overlay" onClick={this.openNav.bind(this)}>
            <div className="box-controller">
              <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                Login
              </div>
              <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}  onClick={this.showRegisterBox.bind(this)}>
                Register
              </div>
            </div>
            <div className="box-container">
              {this.state.isLoginOpen && <LoginBox/>}
              {this.state.isRegisterOpen && <RegisterBox/>}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default AuthController;
