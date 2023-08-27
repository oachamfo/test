function EmployeePageInfo(props) {
  return (
    <div className="EmployeePageInfoDiv">
      <div className="EmployeePageInfoDivTop">
        <div className="EmployeePageInfoPicDiv">
          <img
            className="EmployeePageInfoPic"
            src="\src\assets\images\owusu_pic.jfif"
            alt="Employee Page Info Pic"
          />
        </div>
        <div className="EmployeePageInfoTextDiv">
          <p className="EmployeePageInfoName">{props.employeeName}</p>
          <p className="EmployeePageInfoTitle">{props.employeeTitle}</p>
        </div>
      </div>

      <div className="EmployeePageInfoDivBottom">
        <div className="EmployeeInfo">
          <p className="heading">Call Office</p>
          <p>{props.employeeOffice}</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">Call Mobile</p>
          <p>{props.employeeMobile}</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">SMS</p>
          <p>{props.employeeSMS}</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">Email</p>
          <p>{props.employeeEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeePageInfo;
