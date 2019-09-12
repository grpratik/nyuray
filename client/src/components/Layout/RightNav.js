import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from "./../../store/actions/authActions"

const RightNav = (props) => {
    return(
        <div className="topbar collapse navbar-collapse nav-item active">
            <div className="content-topbar nav-item active">
            <div className="left-topbar nav-item active">
                <ul className="right topbar collapse navbar-collapse nav-item active">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Logout" onClick={props.signOut}>Log Out</a></li>

                    {/* <li className="left-topbar-item"><NavLink to="/">Logout</NavLink></li> */}
                    <li className="left-topbar-item"><NavLink to="/about">About</NavLink></li>
                    <li className="left-topbar-item"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="left-topbar-item"><NavLink to="/welcome">Welcome</NavLink></li>
                    {/* { <li><NavLink to="/"className="btn btn-floating pink lighten-1">About</NavLink></li> } */}
                </ul>               
            </div>
            {/* <div className="right-topbar nav-item active">
                <ul>
                    <li><span className="fab fa-facebook-f"></span></li>
                    <li><span className="fab fa-twitter"></span></li>
                    <li><span className="fab fa-pinterest-p"></span></li>
                    <li><span className="fab fa-vimeo-v"></span></li>
                    <li><span className="fab fa-youtube"></span></li>
                </ul>
            </div>     */}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
export default connect(null, mapDispatchToProps)(RightNav)