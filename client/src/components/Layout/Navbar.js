import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RightNav from './RightNav';
import LogoutLayout from '../Layout/LogoutLayout';

const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    
    const links = auth.uid ? <RightNav /> : <LogoutLayout auth={auth.uid}/>;
    return(
        <nav className = "topper nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Vidyalaya Mitra</Link>
            </div>
            {links}
        </nav>
    );
}

const mapStateToProps = (state)=>{
    console.log(state);
    return{
        auth: state.firebase.auth
      }
}

export default connect(mapStateToProps)(Navbar);