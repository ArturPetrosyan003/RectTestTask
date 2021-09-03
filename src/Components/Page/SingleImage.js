import React from 'react';

import Date from '../../assets/icons/page/date-icon.svg';
import View from '../../assets/icons/page/view-icon.svg';
import Placeholder from '../../assets/icons/page/page-layout-1-content-palcaeholder.svg';

import ExportButton from '../UI/ExportButton';
import IconContainer from '../UI/IconContainer';

const SingleImage = (props) => {
    return (
        <div className='single-image-container'>
            <p>Category Name</p>
            <h4>Title</h4>

            <div className='info-container'>
                <p>Author Name</p>
                <span>
                    <img src={Date} />
                    <p>22/12/2019</p>
                </span>

                <span>
                    <img src={View} />
                    <p>256</p>
                </span>
            </div>

            <div className='bottom'>
                <img src={Placeholder} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <IconContainer label={true} />
                <ExportButton />
            </div>
        </div>
    );
};

export default SingleImage;