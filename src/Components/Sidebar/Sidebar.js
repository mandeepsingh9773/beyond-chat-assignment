import React, { useState } from "react";
import "./Sidebar.css";
import { FaCog } from "react-icons/fa";
import { RiImportFill, RiTableFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        {isOpen ? <IoIosArrowBack /> : <RxHamburgerMenu />}
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <RiImportFill className="icon" />
          {isOpen && <span>Explore Chats</span>}
        </div>
        <div className="menu-item">
          <MdContactPhone className="icon" />
          {isOpen && <span>Business Leads</span>}
        </div>
        <div className="menu-item">
          <RiTableFill className="icon" />
          {isOpen && <span>View Mind Map</span>}
        </div>
        <div className="menu-item">
          <FaUsers className="icon" />
          {isOpen && <span>Manage Team</span>}
        </div>
        <div className="menu-item">
          <FaCog className="icon" />
          {isOpen && <span>Configure Chatbot</span>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
