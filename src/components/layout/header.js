import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg nav-bg mb-5">
      <p className="navbar-brand text-white" href="#">
        <i className="fas fa-stopwatch-20"></i> Time Tracking App
      </p>
      <div className='ml-auto'>
        <div className="input-group">
          <input
            type="text"
            className="form-control inpt"
            placeholder="Search Task ..."
          />
        </div>
      </div>
    </nav>
  );
}
