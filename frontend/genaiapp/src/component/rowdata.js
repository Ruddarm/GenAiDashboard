import React, { PureComponent } from "react";
import Style from "./rowdata.module.css";
function RowData({ data, index }) {
  console.log(data);
  let iscompleted = data.TotalBadage >= 15 && data.arcadeGames;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{data.userName}</td>
        <td>{data.TotalBadage}/15</td>
        <td>
          <div className={Style.arcade}>{data.arcadeGames ? "Yes" : "No"}</div>
        </td>
        <td>
          <div className={iscompleted ? Style.status : Style.incomplete}>
            {iscompleted ? (
              <div>
                <img src="/whitechecked.png"></img>
                Completed
              </div>
            ) : (
              <div>
                <img src="/remove.png"></img>
                incomplete
              </div>
            )}
          </div>
        </td>
        <td>
          <div className={data.Eligible ? Style.eligible : Style.noteligible}>
            {data.Eligible ? (
              <>
                <img src="/whitegift.png"></img> Eligible
              </>
            ) : (
              <>Not Eligible</>
            )}
          </div>
        </td>
        <td className={Style.profilelink}>
          <a href={data.profilelink.hyperlink}>
            <button>Profile link</button>
          </a>
        </td>
      </tr>
    </>
  );
}

export default RowData;
// {
//   "profilelink": {
//       "text": "https://www.cloudskillsboost.google/public_profiles/5b8bbc0f-8a6b-4317-a47a-9dc57f279a40",
//       "hyperlink": "https://www.cloudskillsboost.google/public_profiles/5b8bbc0f-8a6b-4317-a47a-9dc57f279a40"
//   },
//   "_id": "673c44f466f9fe14d21db110",
//   "userName": "Sumeet Chandrakant Ghadge",
//   "userEmail": "ghadgesumeet556@gmail.com",
//   "TotalBadage": 12,
//   "status": "No",
//   "arcadeGames": true,
//   "Eligible": false,
//   "__v": 0
// }
