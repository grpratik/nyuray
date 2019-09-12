import React from 'react'
import './BackdropModal.css'

const BackdropModal = (props) => (
    <div className="backdrop-modal" onClick={props.clicks}></div>
);

export default BackdropModal;