import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Tags() {
  const tag = [];
  const [show, setShow] = useState(false);
  const [newTag, setNewTag] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewTag = (e) => {
    e.preventDefault();
    alert(newTag);
  };
  return (
    <>
      <div className="tag-card text-center">
        <div className="input-group tag-input">
          <input
            type="text"
            className="form-control tag-inpt"
            placeholder="Search Tag"
          />
        </div>
        <hr className="hr" />
        {tag.length > 0 ? "tag" : <p className="text-muted">No Tag</p>}
        <hr className="hr" />
        <button className="tag" onClick={handleShow}>
          <i className="fas fa-plus"></i> Add Tag
        </button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ color: "white" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleNewTag}>
            <div className="input-group tag-input">
              <input
                type="text"
                className="form-control tag-inpt"
                placeholder="Enter new Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
            <hr className="hr" />
            <button type="submit" className="btn-tag btn mt-4 text-center">
              Add
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
