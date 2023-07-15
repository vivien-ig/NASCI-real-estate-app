import React, { useState } from "react";
import "./tabs.css";

export default function Tabs() {
  const [selectedTabs, setSelectedTabs] = useState(1);

  const handleTabChange = (index) => {
    setSelectedTabs(index);
  };

  return (
    <>
      <div className="tabs">
        <div className="tabs-title">
          {" "}
          <span
            className={selectedTabs === 1 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(1)}
          >
            {" "}
            Key Info
          </span>
          <span
            className={selectedTabs === 2 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(2)}
          >
            Description
          </span>
          <span
            className={selectedTabs === 3 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(3)}
          >
            Room
          </span>
          {/* <hr /> */}
        </div>
        <br />
        <div className="tabs-panel">
          {" "}
          <TabsPanel index={selectedTabs} />
        </div>
      </div>
    </>
  );
}

function TabsPanel(props) {
  if (props.index === 1)
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Key Info</th>
              <th></th>
              <th></th>
              <th>
                feet &nbsp;&nbsp;&nbsp;
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>{" "}
                &nbsp;&nbsp;&nbsp; metres
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h4>Type</h4>
              </td>
              <td>Detached</td>
              <td>
                <h4>Levels</h4>
              </td>
              <td>2 Stories</td>
            </tr>
            <tr>
              <td>
                <h4>Size</h4>
              </td>
              <td>1000-1500 sqft</td>
              <td>
                <h4>Garage</h4>
              </td>
              <td>2 Cars</td>
            </tr>
            <tr>
              <td>
                <h4>Taxes</h4>
              </td>
              <td>$5,000</td>
              <td>
                <h4>Days Listed (Active)</h4>
              </td>
              <td>10 Days</td>
            </tr>
            <tr>
              <td>
                <h4>Lot Sizes</h4>
              </td>
              <td>25 feet x 118.5 feet</td>
              <td>
                <h4>Approx. Age</h4>
              </td>
              <td>51-99 years</td>
            </tr>
            <tr>
              <td>
                <h4>Avg. Price Per Sqft*</h4>
              </td>
              <td>$3,000</td>
            </tr>
          </tbody>
        </table>

        <div style={{ fontSize: ".75rem" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4>Address</h4>&nbsp;&nbsp;&nbsp;
            <p>9789 Riverview CourtTrenton, ON K8V 3S0</p>
          </div>
          <br />
          <br />
          <p>
            *Average square foot calculated using Size Range provided by listing
            agent.
          </p>
        </div>
      </>
    );
  if (props.index === 2) return <>"This is the second tab" </>;
  if (props.index === 3) return <>"This is the third tab" </>;
}
