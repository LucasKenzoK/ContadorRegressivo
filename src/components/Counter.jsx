import React from "react";

import "./Counter.css";

const Counter = ({ title, number, eventColor }) => {
  return (
    <div className="counter">
      <p className="counter-number" style={{ backgroundColor: eventColor }}>
        {number}
      </p>
      <p className="counter-text" style={{ color: eventColor }}>
        {title}
      </p>
    </div>
  );
};

export default Counter;
