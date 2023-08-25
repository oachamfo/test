import { useState } from "react";
import "./App.css";
import Homepage from "./assets/components/Homepage";
import EmployeePage from "./assets/components/EmployeePage";

function App() {
  const [employeeName, setEmployeeName] = useState("Mister O");
  const [employeeTitle, setEmployeeTitle] = useState("CEO for life");
  const [employeeOffice, setEmployeeOffice] = useState("123-456-7890");
  const [employeeMobile, setEmployeeMobile] = useState("123-456-7890");
  const [employeeSMS, setEmployeeSMS] = useState("123-456-7890");
  const [employeeEmail, setEmployeeEmail] = useState("employee@company.com");

  return (
    <div className="App">
      <Homepage />
      <EmployeePage
        employeeName={employeeName}
        employeeTitle={employeeTitle}
        employeeOffice={employeeOffice}
        employeeMobile={employeeMobile}
        employeeSMS={employeeSMS}
        employeeEmail={employeeEmail}
      />
    </div>
  );
}

export default App;
