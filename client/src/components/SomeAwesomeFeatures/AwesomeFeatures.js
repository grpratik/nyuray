import React from 'react'
import './AwesomeFeatures.css'

const AwesomeFeatures = () => {
    return(
        <div className="awesome-Features">
            <h2>Some Awesome Features</h2>
            <ul className="someAwesomeFeatures">
                <li className="awesomeFeaturesDesc">Manage your school administration</li>                
                <li className="awesomeFeaturesDesc">Check the results published in the school</li>                
                <li className="awesomeFeaturesDesc">Make the link, pay online bill and many more</li>                
            </ul>
        </div>
    );
}

export default AwesomeFeatures;