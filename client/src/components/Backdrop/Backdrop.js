import React from 'react';
import './Backdrop.css'

const backdrop = (props) => (
    <div className="backdrop-hamberger" onClick={props.clicks}></div>
);

export default backdrop;