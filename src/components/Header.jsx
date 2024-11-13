import React from "react";
import { Settings, ChevronDown } from "lucide-react";

const Header = ({
  grouping,
  setGrouping,
  ordering,
  setOrdering,
  showDropdown,
  setShowDropdown,
}) => {
  return (
    <div className="header">
      <div
        className="display-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Settings size={16} />
        <span>Display</span>
        <ChevronDown size={16} />
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-item">
            <span className="dropdown-label">Grouping</span>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
              className="dropdown-select"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span className="dropdown-label">Ordering</span>
            <select
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
              className="dropdown-select"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
