import React, { useState } from "react";
import moment from "moment";

import "./styles.css";

function CalenderComponent() {
  const [isExpand, setExpand] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(moment().format("MMMM"));

  const [isYearExpand, setYearExpand] = useState(false);
  const [currentYear, setCurrentYear] = useState(
    parseInt(moment().format("YYYY"))
  );

  const weekDaysArray = moment.weekdaysShort();
  const monthsInArray = moment.months();
  const daysInmonth = moment().daysInMonth();
  const firstDayOfMonth = moment().startOf("month").format("d");
  const currentDay = moment().format("D");

  const blanksDaysArray = [];
  for (let blankDay = 0; blankDay < firstDayOfMonth; blankDay++) {
    blanksDaysArray.push(<td className="calendar-dates empty">{""}</td>);
  }

  const daysInMonthAsArray = [];
  for (let day = 1; day < daysInmonth + 1; day++) {
    let currentDayClassName =
      day === parseInt(currentDay, 0) ? "today-date" : "";
    daysInMonthAsArray.push(
      <td
        key={day}
        onClick={() => console.log(day)}
        className={`calendar-dates ${currentDayClassName}`}
      >
        {day}
      </td>
    );
  }

  const totalDays = [...blanksDaysArray, ...daysInMonthAsArray];
  let rows = [];
  let cells = [];

  totalDays.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalDays.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  const remaningEmptyCell = 7 - rows.length;
  for (let remaingCell = 0; remaingCell < remaningEmptyCell; remaingCell++) {
    rows[rows.length - 1].push(<td className="calendar-dates empty">{""}</td>);
  }

  const weekDay = (
    <tbody>
      <tr>
        {weekDaysArray.map((day) => (
          <th className="week-days" key={day}>
            {day}
          </th>
        ))}
      </tr>
    </tbody>
  );

  const dropDownComponent = (
    <div className="dropdown-contianer" onClick={() => setExpand(!isExpand)}>
      {monthsInArray.map((monthName) =>
        isExpand ? (
          <div
            className="months-list"
            key={monthName}
            onClick={() => setCurrentMonth(monthName)}
          >
            {monthName}
          </div>
        ) : (
          ""
        )
      )}
      {!isExpand ? <div className="selected-month">{currentMonth}</div> : ""}
    </div>
  );

  // year
  const yearlistArr = [];
  const yearInNumber = parseInt(moment().format("YYYY"), 0);

  for (let year = yearInNumber; year < yearInNumber + 10; year++) {
    yearlistArr.push(year);
  }

  const yearDropdownComponet = (
    <div
      className="year-dropdown-contianer"
      onClick={() => setYearExpand(!isYearExpand)}
    >
      {yearlistArr.map((year) =>
        isYearExpand ? (
          <div
            key={year}
            className="years-list"
            onClick={() => setCurrentYear(year)}
          >
            {year}
          </div>
        ) : (
          ""
        )
      )}
      {!isYearExpand ? <div className="selected-year">{currentYear}</div> : ""}
    </div>
  );

  return (
    <div className="calender-container">
      <h2>Calender</h2>
      <div className="calender-content">
        <div className="calender-year-month-contianer">
          <div className="month-contianer">{dropDownComponent}</div>,
          <div className="year-contianer">{yearDropdownComponet}</div>
        </div>
        <table className="week-days-contianer">{weekDay}</table>
        {rows.map((el) => (
          <table key={el} className="week-dates-contianer">
            <tr>{el}</tr>
          </table>
        ))}
      </div>
      <button onClick={() => console.log(yearlistArr)}>Click</button>
    </div>
  );
}

export default CalenderComponent;
