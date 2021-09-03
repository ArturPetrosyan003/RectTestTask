import React from 'react';

import Placeholder1 from '../../assets/icons/page/page-layout-2-content-palcaeholder.svg';
import Placeholder2 from '../../assets/icons/page/page-layout-2-content-palcaeholder-2.svg';
import Date from '../../assets/icons/page/date-icon.svg';

import IconContainer from '../UI/IconContainer';
import ExportButton from '../UI/ExportButton';

const DoubleImage = (props) => {
    return (
        <div className='double-image-container'>
            <img src={Placeholder1} />

            <div className='bottom'>
                <div className='left'>
                    <IconContainer label={true} />
                </div>

                <div className='right'>
                    <h4>Title</h4>

                    <span>
                        <img src={Date} />
                        <p>22/12/2019</p>
                    </span>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <img className='placeholder' src={Placeholder2} />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <ExportButton />
                </div>
            </div>
        </div>
    );
};

export default DoubleImage;