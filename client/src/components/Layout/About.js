import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
// import {signIn} from '../../store/actions/authActions'

class About extends Component{
    constructor(props){
        super(props);
        this.state = {LoggedInUser: ""}
    }
    t
    render(){
        return (<div id="about">{this.props.LoggedInUser}</div>)
    }
}

export default About;