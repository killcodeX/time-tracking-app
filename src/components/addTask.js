import React, { useState } from "react";
import Tags from "./tags";
import TimeStamp from "./timeStamp";

export default function AddTask() {
  const [show, setShow] = useState(false);

  return (
    <div className="add-task">
      <div className="input-group task-input">
        <input
          type="text"
          className="form-control task-inpt"
          placeholder="Enter Task"
        />
      </div>
      <button className="tag" onClick={() => setShow(!show)}>
        <i className="fas fa-plus"></i> <span className="ml-2">Tag</span>
      </button>
      {show ? <Tags /> : null}
      <TimeStamp />
    </div>
  );
}
