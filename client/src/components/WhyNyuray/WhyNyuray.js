import React from 'react'
import './WhyNyuray.css'
import WhyNyurayCard from './WhyNyurayCard';
import WhyNyurayCard1 from './WhyNyurayCard1';
import WhyNyurayCard2 from './WhyNyurayCard2';

const WhyNyuray = () => {
    return(
        <div className="why-Nyuray">
            <h2>Why Nyuray?</h2>
            <ul className="whynyuray-Features">
                <li className="whyfeatureDesc"><WhyNyurayCard/></li>                
                <li className="whyfeatureDesc"><WhyNyurayCard1/></li>                
                <li className="whyfeatureDesc"><WhyNyurayCard2/></li>                
            </ul>
        </div>
    );
}

export default WhyNyuray;