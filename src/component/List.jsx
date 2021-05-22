import React from "react";
import "../App.css";
const List = (props) => {
  return (
    <div className="List">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>{props.item}</li>
    </div>
  );
};

export default List;
