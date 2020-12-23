import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/actions";

export default function DisplayTask() {
  const tasks = useSelector((state) => state.Tasks.Tasks);
  const work = useSelector((state) => state.Tasks.works);
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
          {work.length < 1
            ? tasks.map((task, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{task.task}</td>
                    <td>{task.tag}</td>
                    <td>00 : 00 : 00 - {task.timeStamp}</td>
                    <td>
                      <span
                        className="icons"
                        href="#"
                        onClick={() => alert("hi")}
                      >
                        <i class="fas fa-pen"></i>
                      </span>
                      <span
                        className="icons"
                        className=" ml-4"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        <i class="fas fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                );
              })
            : work.map((task, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{task.task}</td>
                    <td>{task.tag}</td>
                    <td>00 : 00 : 00 - {task.timeStamp}</td>
                    <td>
                      {/* <span
                        className="icons"
                        href="#"
                        onClick={() => alert("hi")}
                      >
                        <i class="fas fa-pen"></i>
                      </span> */}
                      <span
                        className="icons"
                        className=" ml-4"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        <i class="fas fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
}
