import React from 'react';

import CircleImage from '../../assets/icons/email/email-layout-circle-icon.svg';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Facebook from '../../assets/icons/facebook-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';

import ExportButton from '../UI/ExportButton';
import IconContainer from '../UI/IconContainer';

const LeftAlign = (props) => {
    return (
        <div className='left-align-container'>
            <div className='left'>
                <img className='circle-img' src={CircleImage} />

                <IconContainer label={false} />
                <ExportButton/>
            </div>

            <div className='right'>
                <h3>Name Surname</h3>
                <p>Web Developer</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default LeftAlign;