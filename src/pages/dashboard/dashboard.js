import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />

    {/* <div> */}
    <Outlet />
    {/* </div> */}
  </div>
);

export default Dashboard;
