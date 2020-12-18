import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/actions";

export default function DisplayTask() {
  const tasks = useSelector((state) => state.Tasks.Tasks);
  const dispatch = useDispatch();
  return (
    <div className="card display-card mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task Name</th>
            <th>Tag</th>
            <th>Time Stamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0
            ? tasks.map((task, i) => {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{task.task}</td>
                    <td>{task.tag}</td>
                    <td>00 : 00 : 00 - {task.timeStamp}</td>
                    <td><a href='#' onClick={() => alert('hi')}><i class="fas fa-pen"></i></a>
                    <a href='#' className=' ml-4' onClick={() => dispatch(deleteTask(task.id))}><i class="fas fa-trash"></i></a></td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
}
