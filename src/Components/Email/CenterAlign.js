import React from 'react';

import CircleImage from '../../assets/icons/email/email-layout-circle-icon.svg';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Facebook from '../../assets/icons/facebook-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';

import ExportButton from '../UI/ExportButton';
import IconContainer from '../UI/IconContainer';

const CenterAlign = (props) => {
    return (
        <div className='center-align-container'>
            <div className='top'>
                <img src={CircleImage} />
                <h3>Name Surname</h3>
                <p>Web Developer</p>
            </div>

            <div className='bottom'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>

                <IconContainer label={false} />
            </div>
            <ExportButton/>
        </div>
    );
};

export default CenterAlign;