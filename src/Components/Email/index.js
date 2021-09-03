import React, { useState } from 'react';

import Layout1 from '../../assets/icons/email/email-layout1.svg';
import Layout2 from '../../assets/icons/email/email-layout2.svg';
import Layout3 from '../../assets/icons/email/email-layout3.svg';

import LeftAlign from './LeftAlign';
import CenterAlign from './CenterAlign';
import RightAlign from './RightAlign';

import TemplateButton from '../UI/templateButton';

const Email = (props) => {

    const [layout, setLayout] = useState(0);

    return (
        <div className='email-page-container'>
            <span>Template Type</span>

            <div className='template-select-button-container'>
                <TemplateButton
                    index={0}
                    img={Layout1}
                    label='Left align'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 0 ? '#f7809a' : '#DDDDDD',
                        color: layout == 0 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 190
                    }}
                />

                <TemplateButton
                    index={1}
                    img={Layout2}
                    label='Center align'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 1 ? '#f7809a' : '#DDDDDD',
                        color: layout == 1 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 190
                    }}
                />

                <TemplateButton
                    index={2}
                    img={Layout3}
                    label='Right align'
                    setLayout={setLayout}
                    style={{
                        borderColor: layout == 2 ? '#f7809a' : '#DDDDDD',
                        color: layout == 2 ? '#f7809a' : '#969899'
                    }}
                    imgStyle={{
                        width: 190
                    }}
                />
            </div>


            <div className='template-content'>
                {
                    layout == 0 ?
                        <LeftAlign />
                        : layout == 1 ?
                            <CenterAlign />
                            : layout == 2 ?
                                <RightAlign />
                                : null
                }
            </div>
        </div>
    );
};

export default Email;