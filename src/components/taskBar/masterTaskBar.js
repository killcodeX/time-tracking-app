import React, { useState } from "react";
import AddTask from "./addTask";
import Tags from "./tags";
import TimeStamp from "./timeStamp";
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/actions/actions';

export default function MasterTaskBar() {
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [selectTag, setSelectTag] = useState("");
  const [time, setTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        id: Math.floor(Math.random() * 100) + 1,
        task: taskName,
        tag: selectTag,
        timeStamp:time
    }

    dispatch(addTask(data))

    setTaskName("")
    setSelectTag("")
    setTime("");
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
