import React from 'react'
import './WhatNyuray.css'
import NyurayCard from './NyurayCard'
import NyurayCard1 from './NyurayCard1'
import NyurayCard2 from './NyurayCard2';

const WhatNyuray = () => {
    return(
        <div className="what-Nyuray">
            <h2>What is Nyuray?</h2>
            <ul className="nyuray-Features">
                <li className="featureDesc"><NyurayCard/></li>                
                <li className="featureDesc"><NyurayCard1/></li>                
                <li className="featureDesc"><NyurayCard2/></li>                
            </ul>
        </div>
    );
}

export default WhatNyuray;