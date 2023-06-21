import React from "react";
import ElementItem from "./ElementItem.jsx";
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";

const ListElement = ({ elements, onDelete }) => {
  return (
    <div className="element-list">
      {elements.map((element, index) => (
        <ElementItem key={index} element={element} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListElement;
