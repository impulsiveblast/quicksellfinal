import React, { useState } from "react";

const Navbar = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-sliders-h"></i>
        <span>Display</span>
        <i className="fas fa-chevron-down"></i>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-item">
            <span>Grouping</span>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-item">
            <span>Ordering</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
