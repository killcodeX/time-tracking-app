import React from "react";

export default function Tags() {
    const tag = [];
  return (
    <div className="tag-card text-center">
      <div className="input-group tag-input">
        <input
          type="text"
          className="form-control tag-inpt"
          placeholder="Search Tag"
        />
      </div>
      <hr className='hr'/>
      {
          tag.length > 0? 'tag' : <p className='text-muted'>No Tag</p>
      }
      <hr className='hr'/>
      <button className='tag'><i className="fas fa-plus"></i> Add Tag</button>
    </div>
  );
}
