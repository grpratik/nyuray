import React from 'react';
import './HambergerToggleButton.css';
import './Hamberger.css'

const hamberger = props => {
    let HambergerClasses = 'side-drawer';
    if (props.show){
        HambergerClasses = ['side-drawer open']
    }
    
    return(
        <nav className={HambergerClasses}>
            <ul>
                <li><a href="/">PRODUCT</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">PORFOLIO</a></li>
                <li><a href="/">MANAGEMENT</a></li>
                <li><a href="/">TEAM</a></li>
            </ul>
        </nav>
    );
}
export default hamberger;