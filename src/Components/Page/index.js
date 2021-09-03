import React, { useState } from 'react';

import Layout3 from '../../assets/icons/page/page-layout1.svg';
import Layout2 from '../../assets/icons/page/page-layout2.svg';
import Layout1 from '../../assets/icons/page/page-layout3.svg';

import SingleImage from './SingleImage';

import TemplateButton from '../UI/templateButton';
import DoubleImage from './DoubleImage';
import Slider from './Slider';

const Page = (props) => {

    const [layout, setLayout] = useState(0);

    return (
        <div className='page-container'>
            <span>Template Type</span>

            <div className='template-select-button-container'>
                <TemplateButton
                    index={0}
                    img={Layout1}
                    label='Single image grid'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 0 ? '#f7809a' : '#DDDDDD',
                        color: layout == 0 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 122
                    }}
                />

                <TemplateButton
                    index={1}
                    img={Layout2}
                    label='2 images grid'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 1 ? '#f7809a' : '#DDDDDD',
                        color: layout == 1 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 122
                    }}
                />

                <TemplateButton
                    index={2}
                    img={Layout3}
                    label='Slider grid'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 2 ? '#f7809a' : '#DDDDDD',
                        color: layout == 2 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 122
                    }}
                />
            </div>

            <div className='content'>
                {
                    layout == 0 ?
                        <SingleImage />
                        : layout == 1 ?
                            <DoubleImage />
                            : layout == 2 ?
                                <Slider />
                                : null
                }
            </div>
        </div>
    );
};

export default Page;