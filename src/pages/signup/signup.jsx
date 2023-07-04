import React, { Component } from "react";
import PropTypes from "prop-types";
import "./signup.css";

import signup_background from "../../assets/signup_background.png";
import logo from "../../assets/logo.png";

class Sign extends Component {
  render() {
    const isRegister = this.props.isRegister;
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
                    />
                    <br />
                  </label>
                  <br />
                </React.Fragment>
              ) : null}

              <label>
                Full Name <br />
                <input placeholder="Enter your name" type="text" name="name" />
                <br />
              </label>
              <br />

              <label>
                Email address
                <br />
                <input
                  placeholder="Enter your email"
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
                  name="name"
                />
                <br />
              </label>

              <div className="signup_btns">
                <button>Create Account </button>
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
            Already have an account <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;
