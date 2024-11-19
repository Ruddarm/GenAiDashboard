import react from "react";
import Style from "./databoard.module.css";
import RowData from "./rowdata";
import { useState } from "react";
function DataBoard({ participant }) {
  // console.log(participant.participant[ 101])
  const [srchQuerry, setSrchQuerry] = useState("");
  const handleSearchChange = (event) => {
    setSrchQuerry(event.target.value);
  };
  const filteredParticipants = participant.filter(
    (data) => data.userName.toLowerCase().includes(srchQuerry.toLowerCase()) // Assuming `name` is the key you want to search
  );

  return (
    <>
      <div className={Style.dataContainer}>
        <div className={Style.inputbox}>
          <h3>Gen AI Leaderboard</h3>
          <input
            type="text"
            placeholder="Serach Participants.."
            onChange={handleSearchChange}
          ></input>
        </div>
        <div className={Style.tableContainer}>
          <table>
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
              {filteredParticipants.length > 0 ? (
                filteredParticipants.map((data, index) => (
                  <RowData key={index} index={index} data={data} />
                ))
              ) : (
                <tr>
                  <td colSpan="7">No participants found</td>
                </tr>
              )}

              {/* {participant.map((data, index) => (
                <RowData key={index} index={index} data={data}></RowData>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataBoard;
