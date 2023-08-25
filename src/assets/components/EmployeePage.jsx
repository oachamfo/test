import Header from "./Header";
import EmployeePageInfo from "./EmployeePageInfo";

function EmployeePage(props) {
  return (
    <div className="EmployeePage">
      <Header heading="Employee" />
      <EmployeePageInfo
        employeeName={props.employeeName}
        employeeTitle={props.employeeTitle}
        employeeOffice={props.employeeOffice}
        employeeMobile={props.employeeMobile}
        employeeSMS={props.employeeSMS}
        employeeEmail={props.employeeEmail}
      />
    </div>
  );
}

export default EmployeePage;
