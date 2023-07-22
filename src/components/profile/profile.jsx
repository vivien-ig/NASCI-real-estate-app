import React, { useEffect } from "react";
import ProfileImg from "./profile.png";
import { ReactSVG } from "react-svg";
import DownArrow from "../../assets/arrow-down.svg";
import { useUserAuth } from "src/context/authProvider";

export default function Profile() {
  const { user } = useUserAuth();

  useEffect(() => {
    console.log(user);
  });
  return (
    <li className="profile-component">
      {/* <div className="profile-img"> */}
      <img src={ProfileImg} alt="Profile" />
      {/* </div> */}
      <div className="profile-details">
        <span>Isaac Zen</span>
        <br />
        <span>{user?.email}</span>
      </div>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("profile-drop-down");
        }}
        src={DownArrow}
      />
    </li>
  );
}
