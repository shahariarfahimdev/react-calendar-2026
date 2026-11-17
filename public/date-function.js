function getMonthData() {
  const months = [
    { key: 0, shortName: "Jan", longName: "January" } /* Object */,
    { key: 1, shortName: "Feb", longName: "February" },
    { key: 2, shortName: "Mar", longName: "March" },
    { key: 3, shortName: "Apr", longName: "April" },
    { key: 4, shortName: "May", longName: "May" },
    { key: 5, shortName: "Jun", longName: "June" },
    { key: 6, shortName: "Jul", longName: "July" },
    { key: 7, shortName: "Aug", longName: "August" },
    { key: 8, shortName: "Sep", longName: "September" },
    { key: 9, shortName: "Oct", longName: "October" },
    { key: 10, shortName: "Nov", longName: "November" },
    { key: 11, shortName: "Dec", longName: "December" },
  ];
  return months;
}

function getDays() {
  const days = [
    { key: 0, shortName: "Sun", longName: "Sunday" },
    { key: 1, shortName: "Mon", longName: "Monday" },
    { key: 2, shortName: "Tue", longName: "Tuesday" },
    { key: 3, shortName: "Wed", longName: "Wednesday" },
    { key: 4, shortName: "Thu", longName: "Thursday" },
    { key: 5, shortName: "Fri", longName: "Friday" },
    { key: 6, shortName: "Sat", longName: "Saturday" },
  ];
  return days;
}

Date.prototype.getLetterDay = function () {
  const letter = getDays()[this.getDay()];
  return letter;
};

Date.prototype.getMonthDetail = function () {
  const monthCopy = getMonthData();
  return monthCopy[this.getMonth()];
};

Date.prototype.getMonthName = function () {
  return this.getMonthDetail().longName;
};

// Gave the students, this an assignment
Date.prototype.getShortName = function () {
  return this.getMonthDetail().shortName;
};

Date.prototype.getFirstDay = function () {
  const returnDate = new Date(this);
  returnDate.setDate(1);
  return returnDate;
};

Date.prototype.getLastDay = function () {
  const returnDate = new Date(this);
  returnDate.setMonth(this.getMonth() + 1);
  returnDate.setDate(0);
  return returnDate;
};

function getISO($date) {
  //console.log({ $date: $date });
  const currentMoment = $date ? $date : new Date();
  return currentMoment.toISOString().split("T")[0].replaceAll("-", ".");
}

function getStringDate($date) {
  const year = $date.getFullYear();
  const month = String($date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String($date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function generateMonthData(year, monthIndex) {
  const monthData = getMonthData()[monthIndex];

  let orginalDate = new Date(year, monthIndex, 1);
  let date = new Date(orginalDate);
  const day = date.getDay();
  const startFill = new Array(day);
  const endDay = date.getLastDay().getDate();

  for (let i = 0, currentDate = 1; i < endDay; i++) {
    startFill.push({
      date: getStringDate(date),
      no: date.getDate(),
      day: date.getLetterDay(),
      isWeekend: date.getDay() == 0 || date.getDay() == 6,
    });
    date.setDate(++currentDate);
  }

  let addMore = new Array(42 - startFill.length);
  let allDays = [...startFill, ...addMore];

  let results = { monthData, allDays };

  return results;
}
