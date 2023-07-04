import React from "react";
import ReactDOM from "react-dom/client";
import Sign from "./pages/signup/signup";
import "./index.css";
import Dashboard from "../src/pages/dashboard/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>} children />
      <Route exact path="/signup" element={<Sign isRegister={true}/>} />
      <Route exact path="/signin" element={<Sign isRegister={false}/>} />
    </Routes>
  </Router> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
