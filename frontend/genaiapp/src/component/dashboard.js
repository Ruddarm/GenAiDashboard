import React from "react";
import Style from "./dashboard.module.css";
function Dashboard() {
  return (
    <>
      <div className={Style.dashboardContainer}>
        <div className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/user.png"></img>
          </div>
          <div className={Style.dashboardInner}>
            <div>Total participants</div>
            <div>180</div>
          </div>
        </div>
        <div className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/user.png"></img>
          </div>
          <div className={Style.dashboardInner}>
            <div>Total participants</div>
            <div>180</div>
          </div>
        </div>
        <div className={Style.dashboard}>
          <div>
            <img className={Style.dashboardIMG} src="/user.png"></img>
          </div>
          <div className={Style.dashboardInner}>
            <div>Total participants</div>
            <div>180</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
