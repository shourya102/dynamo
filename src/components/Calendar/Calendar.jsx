import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CalendarData, months } from "./CalenderData";

export default function Calendar() {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [firstDateDay, setFirstDateDay] = useState(
    new Date(selectedYear, selectedMonth - 1, 1).getDay(),
  );
  const currentMonth = new Date().getMonth() + 1;
  const todayDate = currentDate.getDate();

  const goToPreviousMonth = () => {
    if (selectedMonth > 1) {
      setSelectedMonth(selectedMonth - 1);
    } else {
      if (selectedYear > 2023) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(12);
      }
    }
    setFirstDateDay(new Date(selectedYear, selectedMonth - 2, 1).getDay());
    console.log(firstDateDay);
  };

  const goToNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else if (selectedMonth < currentMonth) {
      setSelectedMonth(selectedMonth + 1);
    }
    setFirstDateDay(new Date(selectedYear, selectedMonth, 1).getDay());
    console.log(firstDateDay);
  };
  const monthData = CalendarData[selectedYear][selectedMonth];
  let days = [];
  for (let day = 0; day < firstDateDay; day++) {
    days.push("  ");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex flex-col shadow-lg bg-skin-fill-1  my-auto  ">
        <div className="flex  p-4 pt-9 justify-between items-center   ">
          <button
            onClick={goToPreviousMonth}
            disabled={selectedYear === 2023 && selectedMonth === 1}
          >
            <FiChevronLeft
              size={30}
              opacity={
                selectedYear === 2023 && selectedMonth === 1 ? "40%" : "120%"
              }
            ></FiChevronLeft>
          </button>

          <div>
            <span className="sub sm:text-paragraph p-1 mr-2">
              {months[selectedMonth]}
            </span>
            <span className=" text-sm sm:text-paragraph">{selectedYear}</span>
          </div>
          <button
            onClick={goToNextMonth}
            disabled={currentMonth === selectedMonth}
          >
            <FiChevronRight
              size={30}
              opacity={currentMonth === selectedMonth ? "40%" : "120%"}
            ></FiChevronRight>
          </button>
        </div>
        <div>
          <ul className="grid grid-cols-7 gap-2 p-3">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
        </div>
        <div>
          <div className="">
            <div className="grid grid-cols-7 gap-1 pt-0 pl-5 p-4 ">
              {days.map((data) => {
                return (
                  <p
                    key={data}
                    className={`inline-flex w-9 rounded-full p-2 item-center justify-center`}
                  >
                    {data}
                  </p>
                );
              })}

              {Object.keys(monthData).map((day) => (
                <a
                  key={day}
                  className={`${day > todayDate && selectedYear === 2023 && selectedMonth === currentMonth ? "cursor-default" : ""}`}
                  href={
                    day > todayDate &&
                    selectedYear === 2023 &&
                    selectedMonth === currentMonth
                      ? ""
                      : monthData[day].link
                  }
                  onClick={
                    day > todayDate &&
                    selectedYear === 2023 &&
                    selectedMonth === currentMonth
                      ? (e) => {
                          e.preventDefault();
                        }
                      : () => {}
                  }
                >
                  <p
                    className={`inline-flex w-9 rounded-full p-2 item-center justify-center ${day === todayDate && currentMonth === selectedMonth ? "bg-skin-fill-3 text-white" : ""} ${day >= todayDate && selectedYear === 2023 && selectedMonth === currentMonth ? "" : "hover:bg-skin-fill-2"} `}
                  >
                    {monthData[day].date}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
