import React from 'react'
import './BeMember.css'
import Premium from './Premium';
import Professional from './Professional';
import Enterprise from './Enterprise';

const BeMember = () => {
    return(
        <div className="beMember-Features">
            <h2>Premium Membership</h2>
            <ul className="beMemberFeatures">
                <li className="beMemberDesc"><Premium/></li>                
                <li className="beMemberDesc"><Professional/></li>                
                <li className="beMemberDesc"><Enterprise/></li>                
            </ul>
        </div>
    );
}

export default BeMember;