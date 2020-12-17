import React from "react";

export default function AddTask() {
  return (
    <div className="add-task">
      <div className="input-group">
        <input
          type="text"
          className="form-control inpt"
          placeholder="Search Task ..."
        />
      </div>
    </div>
  );
}
