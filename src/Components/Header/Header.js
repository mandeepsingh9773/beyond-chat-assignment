import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1>Chatbot Mind Map</h1>
        <p>
          This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here.
        </p>
      </div>
      <div className="header-right">
        <button className="transparent-btn">GUIDE TOUR</button>
        <div className="dropdown">
          <span>SELECT ORG</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="profile-icon">
          <img
            src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com"
            alt="User Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
