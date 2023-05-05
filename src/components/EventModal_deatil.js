import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple"
];

export default function EventModalDetail() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setAddToCartImage,
    addToCartImage
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <div>{selectedEvent.title}</div>
        </header>
        <div className="p-3">
          <div className="grid">
            <img
              style={{ width: "17rem", height: "17rem" }}
              src={selectedEvent.image}
              className=""
              alt=""
            />
          </div>
        </div>
        <footer
          className="flex border-t p-3 mt-5"
          style={{ justifyContent: "space-between" }}
        >
          <button
            type="button"
            onClick={() => {
              let tempData = [];
              addToCartImage &&
                addToCartImage.length > 0 &&
                addToCartImage.map((e) => {
                  if (e) {
                    tempData.push(e);
                  }
                });
              tempData.push(selectedEvent);
              setAddToCartImage(tempData);
              console.log(tempData);
              setShowEventModal(false);
            }}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={() => setShowEventModal(false)}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Close
          </button>
        </footer>
      </form>
    </div>
  );
}
