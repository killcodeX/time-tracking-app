import React,{useState} from "react";
import AddTag from './addTag';
import {useSelector} from 'react-redux';

export default function Header() {
  const state = useSelector(state => state.Tasks.Tasks);
  const [search, setSearch] = useState('');

  return (
    <nav className="navbar navbar-expand-lg nav-bg mb-5">
      <div className="container">
        <p className="navbar-brand text-white" href="#">
          <i className="fas fa-stopwatch-20"></i> Time Tracking App
        </p>
        <div className="ml-auto form-inline">
          <AddTag/>
          <div className="input-group">
            <input
              type="text"
              className="form-control inpt"
              placeholder="Search Task ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
