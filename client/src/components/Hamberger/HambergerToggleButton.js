import React from 'react'

import './HambergerToggleButton.css';

const HambergerToggleButton = (props) => (
    console.log("Hamberger button to be clicked on :"+ props.click),
    
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);

export default HambergerToggleButton;