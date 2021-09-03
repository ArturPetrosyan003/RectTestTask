import React from 'react';

import Instagram from '../../assets/icons/instagram-icon.svg';
import Facebook from '../../assets/icons/facebook-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';

const IconContainer = (props) => {
    return (
        <div className='icon-container'>
            {
                props.label ? <span>Share</span> : null
            }
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
        </div>
    );
};

export default IconContainer;