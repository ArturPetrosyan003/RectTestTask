import React from 'react';

const TemplateButton = (props) => {

    return (
        <button
            className='template-select-button'
            style={props.style}
            onClick={(e) => {
                props.setLayout(props.index)
            }}
        >
            <img src={props.img} style={props.imgStyle} />
            {props.label}
        </button>
    );
};

export default TemplateButton;