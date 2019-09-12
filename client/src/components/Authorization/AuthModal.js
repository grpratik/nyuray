import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setModalComponent, showModal} from './../../store/actions/authActions'
import AuthController from './AuthController';

class AuthModal extends Component{
    render(){
        this.props.onLoginClick(<AuthController/>);
        this.props.showModal();
        return(<Redirect to="/"/>)
    }
}
const MapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (component) => dispatch(setModalComponent(component)),
    showModal: () => dispatch(showModal())
  }
}
export default connect(null, MapDispatchToProps)(AuthModal);