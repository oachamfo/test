function EmployeeListItem(props) {
  return (
    <div className="EmployeeListItemDiv">
      <div className="EmployeeListItemPicDiv">
        <img
          className="EmployeeListItemPic"
          src="..\src\assets\images\owusu_pic.jfif"
          alt="Employee List Item Pic"
        />
      </div>
      <div className="EmployeeListItemTextDiv">
        <p className="Name">{props.employeeName}</p>
        <p className="Title">{props.employeeTitle}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
