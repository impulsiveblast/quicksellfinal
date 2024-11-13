import React from "react";

const Ticket = ({ ticket, user }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name.charAt(0)}
          <span
            className={`status-dot ${user?.available ? "available" : ""}`}
          ></span>
        </div>
      </div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-tags">
        <div className="priority-tag">
          <i className={`fas fa-flag priority-${ticket.priority}`}></i>
        </div>
        {ticket.tag.map((tag, index) => (
          <div key={index} className="feature-tag">
            <i className="fas fa-circle"></i>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
