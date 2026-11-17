import React from "react";
import Month from "./Month";

function Calendar() {
  const year = 2026;

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">
        {year} : Shahariar Fahim
      </h1>

      <div className="calendar-grid">
        {Array.from({ length: 12 }, (_, index) => (
          <Month
            key={index}
            year={year}
            monthIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;