import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'


const LogOut = (props) => {
  return (
    <div>
      <ul className="right">
        <li><a onClick={props.signOut}>Logout</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (LogOut)