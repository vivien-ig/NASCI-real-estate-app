import React, { useState } from "react";
import "./signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

import signup_background from "../../assets/signup_background.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sign = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const sign = (e) => {
    console.log(email, password);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => console.log(err));
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
          <form action="">
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
            </label>

            <div className="signup_btns">
              <button onClick={sign}>Create Account </button>
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
