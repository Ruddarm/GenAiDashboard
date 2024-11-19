import react from "react";
import Style from "./databoard.module.css";
import RowData from "./rowdata";
function DataBoard({participant}) {
  // console.log(participant.participant[ 101])
  return (
    
    <>
      <div className={Style.dataContainer}>
        <div className={Style.inputbox}>
          <h3>Gen AI Leaderboard</h3>
          <input placeholder="Serach Participants.."></input>
        </div>
        <div  className={Style.tableContainer}>
          <table >
            <thead>
              <td>Index</td>
              <td>Name</td>
              <td>Badges</td>
              <td>Arcade Games</td>
              <td>Status</td>
              <td>Goodies</td>
              <td>Profile link</td>
            </thead>
            <tbody>
            {participant.map((data,index)=>(
              <RowData key={index} index={index}  data={data}></RowData>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataBoard;
