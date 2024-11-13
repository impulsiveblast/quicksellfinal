import React from "react";
import Column from "./Column";

const Board = ({ tickets, users, groupBy, sortBy }) => {
  const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  const groupTickets = () => {
    let groupedTickets = {};

    if (groupBy === "status") {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        const userName = user ? user.name : "Unassigned";
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const priority = priorityLabels[ticket.priority];
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }

    // Sort tickets within each group
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => {
        if (sortBy === "priority") {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedTickets;
  };

  const grouped = groupTickets();

  return (
    <div className="board">
      {Object.entries(grouped).map(([group, tickets]) => (
        <Column key={group} title={group} tickets={tickets} users={users} />
      ))}
    </div>
  );
};

export default Board;
