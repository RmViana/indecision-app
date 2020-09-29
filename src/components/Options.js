import React from "react";

const Options = (props) => {
  return (
    <div>
      <li>{props.optionText}</li>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Options;
