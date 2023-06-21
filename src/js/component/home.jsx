import React, { useState } from "react";
import InputFunc from "./input.jsx";
import ListElement from "./ListElement.jsx";

//create your first component
const Home = () => {
  const [elements, setElements] = useState([]);
  const handleAddElement = (newElement) => {
    setElements((prevElements) => [...prevElements, newElement]);
  };
  const handleDeleteElement = (element) => {
    setElements((prevElements) =>
      prevElements.filter((item) => item !== element)
    );
  };

  return (
    <div>
      {/* <h2>Input Bar Example</h2> */}
      <InputFunc onAdd={handleAddElement} />
      <ListElement elements={elements} onDelete={handleDeleteElement} />
    </div>
  );
};

export default Home;
