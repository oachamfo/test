import Header from "./Header";
import EmployeePageInfo from "./EmployeePageInfo";

function EmployeePage(props) {
  return (
    <div className="EmployeePage">
      <Header heading="Employee" />
      <EmployeePageInfo
        employeeName={props.employeeName}
        employeeTitle={props.employeeTitle}
      />
    </div>
  );
}

export default EmployeePage;
