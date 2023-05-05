import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, addToCartImage, setShowCart } =
    useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header
      className="px-4 py-2 flex items-center"
      style={{ justifyContent: "space-between" }}
    >
      <div className="row">
        <div className="col  flex items-center">
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 mt-2">
              chevron_left
            </span>
          </button>
          <h2
            className="text-xl text-gray-500 font-bold"
            style={{ color: "#e62197" }}
          >
            {dayjs(new Date(dayjs().year(), monthIndex)).format(
              "MMMM YYYY"
            )}
          </h2>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 mt-2">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col cursor-pointer">
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log(addToCartImage);
              if (addToCartImage && addToCartImage.length > 0) {
                setShowCart(true);
              } else {
                alert("Please add some data to cart");
              }
            }}
          >
            Cart (
            {addToCartImage && addToCartImage.length > 0
              ? addToCartImage.length
              : 0}
            )
          </button>
        </div>
      </div>
    </header>
  );
}
