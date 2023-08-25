import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="EmployeeList">
      <EmployeeListItem
        employeeName="First0 Last0"
        employeeTitle="PRESIDENT"
        employeeImage="..\src\assets\images\female-face.jpg"
      />
      <EmployeeListItem
        employeeName="First1 Last1"
        employeeTitle="VICE PRESIDENT"
        employeeImage="..\src\assets\images\owusu_pic.jfif"
      />
      <EmployeeListItem
        employeeName="First2 Last2"
        employeeTitle="CEO"
        employeeImage="..\src\assets\images\male-face.webp"
      />
    </div>
  );
}

export default EmployeeList;
