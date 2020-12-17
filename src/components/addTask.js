import React from "react";

export default function AddTask() {
  return (
    <div className="add-task">
      <div className="input-group task-input">
        <input
          type="text"
          className="form-control task-inpt"
          placeholder="Enter Task"
        />
      </div>
      <button className='tag'><i className="fas fa-plus"></i> <span className='ml-2'>Tag</span></button>
      <div className='time'>
          <p>0:00:00 <i class="fas fa-play"></i></p>
      </div>
    </div>
  );
}
