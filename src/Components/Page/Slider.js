import React from 'react';

import SmallImage from '../../assets/icons/page/page-layout-3-content-palcaeholder-small.svg';
import Palcaeholder from '../../assets/icons/page/page-layout-3-content-palcaeholder.svg';
import ExportButton from '../UI/ExportButton';

const Slider = (props) => {
    return (
        <div className='slider-container'>
            <div className='left'>
                <div className='sm-images'>
                    <img src={SmallImage} />
                    <img src={SmallImage} />
                    <img src={SmallImage} />
                    <img src={SmallImage} />
                </div>

                <img src={Palcaeholder} />
            </div>

            <div className='right'>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className='button-container'>
                    <button>Button1</button>
                    <button>Button2</button>
                </div>

                <ul>
                    <li><span>Lorem ipsum dolor</span></li>
                    <li><span>Lorem ipsum dolor</span></li>
                    <li><span>Lorem ipsum dolor</span></li>
                    <li><span>Lorem ipsum dolor</span></li>
                </ul>

                <ExportButton />
            </div>
        </div>
    );
};

export default Slider;