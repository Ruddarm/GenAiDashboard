import React from "react";
import Style from "./dashboard.module.css";
function Dashboard() {
  return (
    <>
      <div className={Style.dashboardContainer}>
        <div id={Style.participants} className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/user.png"></img>
          </div>
          <div  className={Style.dashboardInner}>
            <div><b>Total participants</b></div>
            <div>194</div>
          </div>
        </div>
        <div id={Style.completions} className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/success.png"></img>
          </div>
          <div className={Style.dashboardInner}>
            <div><b>Total Completions</b></div>
            <div>112</div>
          </div>
        </div>
        <div id={Style.goodies} className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/gift.png"></img>
          </div>
          <div className={Style.dashboardInner}>
            <div><b>Eligible for Goodies</b></div>
            <div>80</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
