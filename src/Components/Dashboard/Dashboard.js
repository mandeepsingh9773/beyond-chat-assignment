import React from "react";
import { FaPlus, FaRegEnvelope, FaEdit, FaTrash } from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Top section with buttons */}
      <div className="top-section">
        <button className="top-button">
          <FaPlus className="icon" /> Add Data
        </button>
        <button className="top-button">
          <FaRegEnvelope className="icon" /> Data Training Status
        </button>
        <button className="top-button">
          <FaRegEnvelope className="icon" /> Ground Truths
        </button>
      </div>

      {/* Horizontal line */}
      <hr className="divider" />

      {/* Search section */}
      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-input" />
        <select className="dropdown">
          <option value="all">All</option>
          <option value="source1">Source 1</option>
          <option value="source2">Source 2</option>
        </select>
        <button className="search-button">Search</button>
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Source</th>
            <th>Type</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Data 1</td>
            <td>Source 1</td>
            <td>Type A</td>
            <td>12/09/2024</td>
            <td>
              <FaEdit className="action-icon" />{" "}
              <FaTrash className="action-icon" />
            </td>
          </tr>
          <tr>
            <td>Sample Data 2</td>
            <td>Source 2</td>
            <td>Type B</td>
            <td>11/09/2024</td>
            <td>
              <FaEdit className="action-icon" />{" "}
              <FaTrash className="action-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
