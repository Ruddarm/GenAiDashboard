import react from "react";
import Style from "./databoard.module.css";

function DataBoard() {
  return (
    <>
      <div className={Style.dataContainer}>
        <div className={Style.inputbox}>
          <h3>Gen AI Leaderboard</h3>
          <input placeholder="Serach Participants.."></input>
        </div>
        <div  className={Style.tableContainer}>
          <table>
            <thead>
              <td>Rank</td>
              <td>Name</td>
              <td>Badges</td>
              <td>Arcade Games</td>
              <td>Status</td>
              <td>Goodies</td>
              <td>Profile link</td>
            </thead>
            <tr>
              <td>1</td>
              <td>Ruddarm Maurya</td>
              <td>15/15</td>
              <td>yes</td>
              <td>Completed</td>
              <td>eligilbe</td>
              <td><button>Click</button></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataBoard;
