import React from "react";
import ProfileImg from "./profile.png";
import { ReactSVG } from "react-svg";
import DownArrow from "../../assets/arrow-down.svg";

export default function Profile() {
  return (
    <>
      <li className="profile-component">
        <div className="profile-img">
          <img src={ProfileImg} alt="Profile" />
        </div>
        <div className="profile-details">
          <span>Isaac Zen</span>
          <br />
          <span>isaaczen@mail.com</span>
        </div>
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("profile-drop-down");
          }}
          src={DownArrow}
        />
      </li>
    </>
  );
}
