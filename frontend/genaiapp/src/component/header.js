import React from "react";
import Style from './header.module.css'
function Header() {

  return (
    <>
      <div className={Style.container}>
        <div className={Style.gdglogo}>
          <img
            src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
            className="svg"
            alt="Google Developer Groups logo"
          />
        </div>
        <div className={Style.option}>
          <a><img src="/google.png"/></a>
          <a><img src="/linkedin.png"></img></a>
          <a><img src="/instagram.png"/></a>
          {/* <button><img src="/night-mode.png"></img></button> */}
        </div>
      </div>
    </>
  );
}

export default Header;
