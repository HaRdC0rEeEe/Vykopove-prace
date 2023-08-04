import React from 'react';

const GenderCheckbox = ({ gender, selectedGender, onChange }) => {
    return (
        <>
            <label>{gender}:
                <input type="radio" name="genderGroup"
                    value={gender}
                    checked={selectedGender === gender}
                    onChange={onChange}
                />
            </label>
        </>
    );
};

export default GenderCheckbox;
