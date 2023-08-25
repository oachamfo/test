import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="EmployeeList">
      <EmployeeListItem employeeName="First Last" employeeTitle="CEO" />
    </div>
  );
}

export default EmployeeList;
