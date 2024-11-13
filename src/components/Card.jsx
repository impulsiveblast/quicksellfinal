import React from "react";
import {
  Circle,
  User,
  Signal,
  SignalLow,
  SignalMedium,
  SignalHigh,
} from "lucide-react";

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch (priority.toLowerCase()) {
      case "urgent":
        return <SignalHigh size={16} className="text-red-500" />;
      case "high":
        return <SignalHigh size={16} className="text-orange-500" />;
      case "medium":
        return <SignalMedium size={16} className="text-yellow-500" />;
      case "low":
        return <SignalLow size={16} className="text-gray-500" />;
      default:
        return <Signal size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="avatar">
          <User size={16} />
          <span
            className={`status-indicator ${user?.available ? "available" : ""}`}
          ></span>
        </div>
      </div>
      <div className="card-title">
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        {getPriorityIcon(ticket.priority)}
        {ticket.tag.map((tag, index) => (
          <div key={index} className="tag">
            <Circle size={14} />
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
