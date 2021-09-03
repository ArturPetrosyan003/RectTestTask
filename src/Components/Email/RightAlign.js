import React from 'react';

import CircleImage from '../../assets/icons/email/email-layout-circle-icon.svg';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Facebook from '../../assets/icons/facebook-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';

import ExportButton from '../UI/ExportButton';
import IconContainer from '../UI/IconContainer';

const RightAlign = (props) => {
    return (
        <div className='right-align-container'>
            <div className='left'>
                <h3>Name Surname</h3>
                <p>Web Developer</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <ExportButton/>
            </div>

            <div className='right'>
                <img className='circle-img' src={CircleImage} />

                <IconContainer label={false} />
            </div>
        </div>
    );
};

export default RightAlign;