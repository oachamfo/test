function EmployeePageInfo(props) {
  return (
    <div className="EmployeePageInfoDiv">
      <div className="EmployeePageInfoDivTop">
        <div className="EmployeePageInfoPicDiv">
          <img
            className="EmployeePageInfoPic"
            src="..\src\assets\images\owusu_pic.jfif"
            alt="Employee Page Info Pic"
          />
        </div>
        <div className="EmployeePageInfoTextDiv">
          <p className="EmployeePageInfoName">First Last</p>
          <p className="EmployeePageInfoTitle">CEO</p>
        </div>
      </div>

      <div className="EmployeePageInfoDivBottom">
        <div className="EmployeeInfo">
          <p className="heading">Call Office</p>
          <p>123-456-7890</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">Call Mobile</p>
          <p>123-456-7890</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">SMS</p>
          <p>123-456-7890</p>
        </div>
        <div className="EmployeeInfo">
          <p className="heading">Email</p>
          <p>emplyee@company.com</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeePageInfo;
