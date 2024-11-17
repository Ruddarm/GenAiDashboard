import React from "react";
import Style from './header.module.css'
function Header() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.gdglogo}>
          <img
            src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
            class="svg"
            alt="Google Developer Groups logo"
          />
        </div>
        <div className={Style.option}>
          <a>Instagram</a>
          <a>linedin</a>
          <a>google</a>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Header;
