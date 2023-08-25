import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="EmployeeList">
      <EmployeeListItem employeeName="First0 Last0" employeeTitle="PRESIDENT" />
      <EmployeeListItem
        employeeName="First1 Last1"
        employeeTitle="VICE PRESIDENT"
      />
      <EmployeeListItem employeeName="First2 Last2" employeeTitle="CEO" />
    </div>
  );
}

export default EmployeeList;
