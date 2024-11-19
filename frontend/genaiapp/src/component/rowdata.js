import React, { PureComponent } from "react";
import Style from "./rowdata.module.css";
function RowData() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Ruddarm Maurya</td>
        <td>15/15</td>
        <td>
          <div className={Style.arcade}>yes</div>
        </td>
        <td >
          <div className={Style.status}>
            <img src="/whitechecked.png"></img>
            Completed
          </div>
        </td>
        <td>
          <div className={Style.eligible}>
            <img src="/whitegift.png"></img>
            Eligible
          </div>
        </td>
        <td className={Style.profilelink}>
          <a href="">
            <button>Profile link</button>
          </a>
        </td>
      </tr>
    </>
  );
}

export default RowData;
