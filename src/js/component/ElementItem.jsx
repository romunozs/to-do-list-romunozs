import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faXmark } from "@fortawesome/free-solid-svg-icons";

const xicon = <FontAwesomeIcon icon="fa-solid fa-xmark" />;

const ElementItem = ({ element, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDelete = () => {
    onDelete(element);
  };

  return (
    <div
      className="element-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {element}
      {hovered && (
        <FontAwesomeIcon
          icon={faXmark}
          className="delete-icon"
          onClick={handleDelete}
        />
      )}
    </div>
  );
};

export default ElementItem;
