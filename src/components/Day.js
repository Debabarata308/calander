import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const holidayList = [
    {
      title: "Budha Purnima/Vesak",
      description: "",
      image:
        "https://images.indianexpress.com/2020/05/Buddha-Purnima.jpg",
      label: "red",
      day: 1683225000000,
      id: 1683288774509,
      colorCode: 1,
      type: ""
    },
    {
      title: "Good Friday",
      description: "",
      image:
        "https://images.hindustantimes.com/tech/img/2023/04/06/960x540/sincerely-media-fLV5wLn6vvw-unsplash_1680789784170_1680789786022_1680789786022.jpg",
      label: "purple",
      day: 1683829800000,
      id: 1683288833206,
      colorCode: 1,
      type: ""
    },
    {
      title: "Birthday Of Ravindranath",
      description: "",
      image:
        "https://www.shutterstock.com/image-vector/rabindranath-tagore-jayanti-holiday-celebration-260nw-1707047587.jpg",
      label: "blue",
      day: 1683570600000,
      id: 1683288892188,
      colorCode: 1,
      type: ""
    },
    {
      title: "Sankranti",
      description: "",
      image:
        "https://static.toiimg.com/photo/msid-96993480/96993480.jpg",
      label: "green",
      day: 1684693800000,
      id: 1683288907436,
      colorCode: 1,
      type: ""
    }
  ];
  localStorage.removeItem("savedEvents");
  localStorage.setItem("savedEvents", JSON.stringify(holidayList));

  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent
  } = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-custom-pink rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-left">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {/* {day.format("ddd").toUpperCase()} */}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-left ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
