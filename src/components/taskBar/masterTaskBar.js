import React, { useState } from "react";
import AddTask from "./addTask";
import Tags from "./tags";
import TimeStamp from "./timeStamp";

export default function MasterTaskBar() {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [selectTag, setSelectTag] = useState("");
  const [time, setTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName, selectTag, time);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-task">
        <AddTask value={taskName} onchange={setTaskName} />
        <button type="button" className="tag" onClick={() => setShow(!show)}>
          <i className="fas fa-plus"></i> Select Tag
        </button>
        {show ? (
          <Tags value={selectTag} onchange={setSelectTag} setShow={setShow} />
        ) : null}
        <TimeStamp value={time} onchange={setTime} />
        <button className="btn-tag" type="submit">Task Done</button>
      </div>
    </form>
  );
}
