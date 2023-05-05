import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  setSelectedEventDeatail: () => {},
  selectedEventDeatail: {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  addToCartImage: [],
  setAddToCartImage: () => {},
  showCart: false,
  setShowCart: () => {},
  filteredEvents: [
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
  ]
});

export default GlobalContext;
