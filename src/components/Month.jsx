import React from "react";

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

function Month({ year, monthIndex }) {
  const { monthData, allDays } =
    window.generateMonthData(year, monthIndex);

  return (
    <div className="month">
      <h3 className="month-title">{monthData.longName}</h3>

      <div className="week-header">
        {weekdays.map((day, index) => (
          <div className="weekday" key={index}>
            {day}
          </div>
        ))}
      </div>

      <div className="month-days">
        {Array.from(allDays, (day, index) => (
          <div
            className={day?.isWeekend ? "day weekend" : "day"}
            key={index}
          >
            {day?.no ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;