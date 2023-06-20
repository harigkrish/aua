import React from "react";

import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const OnboardManagement = () => {
  const navigate = useNavigate();
  const clieckedEvent = () => {};

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "white", padding: "30px 30px", height: "100%" }}
    >
      <table
        className="mx-auto"
        style={{
          borderCollapse: "collapse",
          width: "500px",
          border: "1px",
          align: "center",
        }}
      >
        <tr style={{ align: "center" }}>
          <th
            colSpan="5"
            style={{ align: "center", background: "lightgrey", color: "white" }}
          >
            Onboard report
          </th>
        </tr>
        <tr style={{ backgroundColor: "lightpink", color: "white" }}>
          <th>Enquiry</th>
          <th>Registration</th>
          <th>Contract Signed</th>
          <th>Setting Up</th>
          <th>Live</th>
        </tr>
        <tr>
          <td>
            <a href="#" onClick={clieckedEvent}>
              2
            </a>
          </td>
          <td>
            <a href="#" onClick={clieckedEvent}>
              1
            </a>
          </td>
          <td>
            <a href="#" onClick={clieckedEvent}>
              1
            </a>
          </td>
          <td>
            <a href="#" onClick={clieckedEvent}>
              1
            </a>
          </td>
          <td>
            <a href="#" onClick={clieckedEvent}>
              1
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OnboardManagement;
