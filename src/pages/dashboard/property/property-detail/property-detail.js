import React from "react";
import "./property-detail.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import { Link } from "react-router-dom";
import NewsImg from "./property_detail.png";
import { ReactSVG } from "react-svg";
import Estimator from "../../../../assets/dashboardicons/calculator.svg";

import Bedrooms from "../../../../assets/properties/bed.svg";
import SquareFeet from "../../../../assets/properties/area.svg";
import Bathrooms from "../../../../assets/properties/bathtub.svg";
import Car from "../../../../assets/properties/car.svg";
import Appraisal from "../../../../assets/properties/appraisal.svg";
import Tabs from "src/components/tabs/tabs";
import { BtnComp } from "src/components/buttons/buttons";

const PropertyDetail = () => {
  return (
    <>
      <div className="property_detail">
        {" "}
        <SearchComp placeholder="Search Listings" title="Filter" />
        <Link className="link_el" to="/property">
          All properties 9789 Riverton CourtTr..{" "}
        </Link>
        <br />
        <img style={{ width: "100%" }} src={NewsImg} alt="home" />
        <div className="property_detail_info">
          <ol>
            <li>Listed 10 Days ago &bull; For Sale &bull; For Rent</li>
            <br />
            <li>
              <h2>9789 Riverview CourtTrenton, ON K8V 3S0</h2>
            </li>
            <br />
            <li>
              <span>
                <strong>$3,000,000</strong> <br /> Listed Price{" "}
              </span>{" "}
              <span>
                <strong>$4,500 </strong>
                <br /> Rent Price
              </span>
              <ReactSVG className="svg_icons" src={Estimator} />
              &nbsp; View Estimates &nbsp; &nbsp; View Price History
            </li>
            <li>
              <ol>
                <li>
                  <ReactSVG className="svg_icons" src={Bedrooms} />
                  &nbsp; 2 Bedrooms
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Bathrooms} />
                  &nbsp; 2 Bathrooms
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={SquareFeet} />
                  &nbsp; 1000 - 1500 square feet
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Car} /> &nbsp; 2 Car
                  Garage
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="property-detail-tabs">
          <div>
            <Tabs />
          </div>

          <div className="property-price-history">
            <h4>Price History</h4>
            <br />
            <table style={{ width: "70%" }}>
              <tr>
                <th>List Date</th>
                <th>List Price</th>
                <th>Status</th>
                <th>End Date</th>
                <th>Sold Price</th>
              </tr>
              <tr>
                <td class="table-cell">08/05/2023</td>
                <td class="table-cell">$702,000</td>
                <td class="table-cell">For Sale</td>{" "}
                <td class="table-cell">-</td>
                <td class="table-cell">Not Sold yet</td>
              </tr>
              <tr>
                <td class="table-cell">08/05/2023</td>
                <td class="table-cell">$702,000</td>
                <td class="table-cell">Terminated</td>{" "}
                <td class="table-cell">-</td>
                <td class="table-cell">Not Sold yet</td>
              </tr>
            </table>
            <br />
            <p className="flex-row" style={{ fontSize: ".75rem" }}>
              *Real Estate boards require that you sign in to see the full
              details of this property. Log in or Sign up to see price history.
            </p>
          </div>
          <div className="property-appraisal">
            <h2>Appraisal</h2>
            <div>
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add("appraisal-svg");
                }}
                src={Appraisal}
              />
              <p>
                Similar properties sold on average for: $851,403 <br />
                This home is listed $71,403 below average sold prices for
                similar properties.
              </p>
            </div>
          </div>
          <div className="property-mortage">
            <span className="flex-row">
              <h2>Mortage</h2>(Buying a home)
            </span>
            <form>
              <label htmlFor="">Home Price</label>
              <input type="text" />
              <label htmlFor="">Down Payment</label>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <label htmlFor="">Rate</label>
              <input type="text" />
              <input type="text" />
              <BtnComp title="Make Enquiry" color="btn-black" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
