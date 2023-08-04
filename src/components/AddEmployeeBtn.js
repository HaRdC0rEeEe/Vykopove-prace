import React from 'react';

const AddEmployeeBtn = ({ id, name, surname, employeeData, setEmployeeData, gender }) => {

    function handleAddEmployee() {

        if (name && surname && gender) {
            const newID = id + 1;
            const newEmployee = { id: newID, name: name, surname: surname, gender: gender };
            const updatedData = [...employeeData, newEmployee];
            setEmployeeData(updatedData);
            console.log(updatedData);

        } else {
            console.log("Can't add! Please input both name and surname and check gender.");
        }
    }

    return (
        <input type='button' className='.btn-add-employee' value="Add Employee" onClick={handleAddEmployee} />
    );
}

export default AddEmployeeBtn;