import React from "react";

export default function displayTask() {
  return (
    <div className="card display-card mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tasks</th>
            <th scope="col">Tag</th>
            <th scope="col">Time Stamp</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>8:22 PM - 8:23 PM</td>
            <td><i className="fas fa-trash"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
