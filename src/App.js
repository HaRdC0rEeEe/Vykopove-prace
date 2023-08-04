import { useEffect, useState } from 'react';
import SwitchableTab from './components/SwitchableTab';
import AddEmployeeBtn from './components/AddEmployeeBtn';
import TextboxInput from './components/TextboxInput';
import GenderCheckbox from './components/GenderRadio';
import './App.css';
import ListOfEmployees from './components/ListOfEmployees';
import WorkPlanningBtn from './components/WorkPlanningBtn';
import employeeDataImported from "./employeeData";


function App() {


  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [selectedTab, setSelectedTab] = useState('List of Employees');
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [meters, setMeters] = useState('');
  const [hours, setHours] = useState('');
  const [submitClass, setSubmitClass] = useState("cantSubmit");
  const [canSubmit, setCanSubmit] = useState(false);

  const [employeeData, setEmployeeData] = useState(employeeDataImported);
  const [activeTab, setActiveTab] = useState(true);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);

  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);

  };

  let lastId;
  if (employeeData.length === 0)
    lastId = 0;
  else
    lastId = employeeData[employeeData.length - 1].id;


  function handleDelete(id) {
    setEmployeeData(prevData => {
      const filteredData = prevData.filter(employee => employee.id !== id);
      return filteredData.length > 0 ? filteredData : [];
    });
  }


  function handleMetersChange(event) {
    setMeters(event.target.value);

  }


  function handleHoursChange(event) {
    setHours(event.target.value);

  }


  function handlePlanAction() {

    let menMeters = parseInt(men);
    let womenMeters = parseInt(women) / 2.0;
    let workflow = (menMeters + womenMeters) * parseInt(hours);

    if ((meters > workflow) || hours === "" || meters === "") {
      setSubmitClass("cantSubmit");
      setCanSubmit(false);
    }
    else {
      setSubmitClass("canSubmit");
      setCanSubmit(true);
    }



  }

  useEffect(() => {

    handlePlanAction();

  }, [hours, meters]);


  useEffect(() => {

    let maleCount = 0;
    let femaleCount = 0;


    for (const employee of employeeData) {

      if (employee.gender === "Male") {

        maleCount++;
      } else
        femaleCount++;

    }

    // Update the state with the calculated counts
    setMen(maleCount);
    setWomen(femaleCount);

  }, [employeeData]);


  return (
    <div className="App">
      <div className='switchable-tabs'>

        <SwitchableTab nameOfTab="List of Employees" onClick={() => setSelectedTab('List of Employees')} activeTab={selectedTab} />

        <SwitchableTab nameOfTab="Task" onClick={() => setSelectedTab('Task')} activeTab={selectedTab} />


      </div>

      {
        selectedTab === 'List of Employees' &&
        <>

          <ListOfEmployees employeeData={employeeData} handleDelete={handleDelete} />

          <TextboxInput inputType="text" placeholder={"Name"} value={name} onChange={handleNameChange} />
          <TextboxInput inputType="text" placeholder={"Surname"} value={surname} onChange={handleSurnameChange} />
          <GenderCheckbox gender="Male" selectedGender={gender} onChange={handleGenderChange} />
          <GenderCheckbox gender="Female" selectedGender={gender} onChange={handleGenderChange} />


          <AddEmployeeBtn
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
            id={lastId} name={name}
            surname={surname}
            gender={gender}
            disabled={!canSubmit}
          />

        </>
      }

      {
        selectedTab === 'Task' &&
        <>

          <h1>PLANNING EXCAVATION WORKS</h1>

          <p>MEN: {men}</p>
          <p>WOMEN: {women}</p>

          <TextboxInput inputType={"number"} placeholder={"Enter meters"} onChange={handleMetersChange} />
          <TextboxInput inputType={"number"} placeholder={"Enter the hours"} onChange={handleHoursChange} />

          <WorkPlanningBtn submitClass={submitClass} canSubmit={canSubmit} id="WorkPlanningBtn" onClick={() => alert("SUBMITED")} />

        </>
      }


    </div>
  );
}

export default App;
