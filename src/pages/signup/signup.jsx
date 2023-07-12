import React, { useState } from "react";
import "./signup.css";

import { getAuth } from "firebase/auth";

import signup_background from "../../assets/signup_background.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sign = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const sign = async (e) => {
    console.log(email, password);
    e.preventDefault();
    try {
      const user = await getAuth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(e);

      console.log(user);
    } catch (error) {}
  };

  const isRegister = props.isRegister;

  return (
    <div className="signup">
      <div className="backgroundImg">
        <img src={signup_background} alt="Background" />
      </div>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right_component">
        <div className="formcomponent">
          <form onSubmit={sign}>
            <h2>Create Account</h2>

            {isRegister ? (
              <React.Fragment>
                <label>
                  Full Name <br />
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <br />
                </label>
                <br />
              </React.Fragment>
            ) : null}

            <label>
              Email address
              <br />
              <input
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="name"
              />
              <br />
            </label>
            <br />
            <label>
              Password <br />
              <input
                placeholder="minimum of 8 characters"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
            </label>

            <div className="signup_btns">
              <button type="submit">Create Account </button>
              <br />
              or
              <br />
              <br />
              <button className="google_signup">Sign Up with Google</button>
              <p>
                By clicking on create account you hereby agree to our{" "}
                <strong>Terms and Conditions</strong> and
                <strong>Privacy Policy</strong>.
              </p>
            </div>
          </form>
        </div>
        <div className="signin_link">
          Already have an account <Link href="#">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Sign;
