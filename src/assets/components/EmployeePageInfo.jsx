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

      <div className="EmployeePageInfoDivBottom">Hello word</div>
    </div>
  );
}

export default EmployeePageInfo;
