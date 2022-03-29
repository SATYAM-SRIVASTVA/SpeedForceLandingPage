import React, { Component } from "react";
import "./navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <div className="navbar-main-container">
        <div className="navbar-image-container">
          <img
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/speedforce_1.gif"
            alt="speedforce logo"
          />
        </div>
      </div>
    );
  }
}