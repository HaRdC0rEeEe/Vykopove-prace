import React from 'react';
import "./TextBoxInput.css";

const TextboxName = ({ inputType, placeholder, value, onChange }) => {
    return (
        <div>
            <input type={inputType}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='inputType'
            />
        </div>
    );
};

export default TextboxName;
