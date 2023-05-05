import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Cart from "./components/cart";
import EventModalDetail from "./components/EventModal_deatil";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, showCart } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {!showCart ? (
        <div
          style={{
            margin: "2rem 0rem 0rem 7rem",
            width: "65rem"
          }}
        >
          {showEventModal && <EventModalDetail />}

          <div className="h-screen flex flex-col">
            <CalendarHeader />
            <div className="row d-inline">
              <div className="col">Sunday</div>
              <div className="col">Monday</div>
              <div className="col">Tuesday</div>
              <div className="col">Wednesday</div>
              <div className="col">Thursday</div>
              <div className="col">Friday</div>
              <div className="col">Saturday</div>
            </div>
            <div className="flex flex-1">
              <Month month={currenMonth} />
            </div>
          </div>
        </div>
      ) : (
        <Cart />
      )}
    </React.Fragment>
  );
}

export default App;
