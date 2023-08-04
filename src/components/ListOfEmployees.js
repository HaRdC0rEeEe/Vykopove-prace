import "./ListOfEmployees.css"

function ListOfEmployees({ employeeData, handleDelete }) {
    function getEmployees() {
        if (employeeData.length === 0)
            return <p>No employees found.</p>;


        return employeeData.map((employee, index) => (
            <div className="list-of-employees" key={index}>
                <span className="employee">{employee.name} {employee.surname} - {employee.gender}</span>
                <span className="delete-button"><input type='button' value="X" onClick={() => handleDelete(employee.id)} /></span>
            </div>
        ));
    }

    return <>{getEmployees()}</>;
}

export default ListOfEmployees;
