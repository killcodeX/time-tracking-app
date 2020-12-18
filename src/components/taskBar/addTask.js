import React from "react";

export default function AddTask({ value, onchange }) {
  return (
    <>
      <div className="input-group task-input">
        <input
          type="text"
          className="form-control task-inpt"
          placeholder="Enter Task"
          value={value}
          onChange={(e) => onchange(e.target.value)}
        />
      </div>
    </>
  );
}
