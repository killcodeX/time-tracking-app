import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/actions";

export default function DisplayTask() {
  const tasks = useSelector((state) => state.Tasks.Tasks);
  const dispatch = useDispatch();
  return (
    <div className="card display-card mt-5">
      <table className="table text-center">
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
          {tasks.length > 0
            ? tasks.map((task, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{task.task}</td>
                    <td>{task.tag}</td>
                    <td>00 : 00 : 00 - {task.timeStamp}</td>
                    <td>
                      <button type='button'
                        className="trash-button"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
