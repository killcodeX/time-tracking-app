import React from "react";
import { useSelector } from "react-redux";

export default function Tags({ value, onchange,setShow }) {
  const tags = useSelector((state) => state.Tasks.Tags);

  const submitTag = (tag) => {
    onchange(tag)
    setShow(false)
  }
  return (
    <div className="tag-card text-center">
      {tags.length > 0 ? (
        tags.map((tag, i) => {
          return (
            <p className="btn-tag" onClick={() => submitTag(tag)} key={i}>
              {tag}
            </p>
          );
        })
      ) : (
        <p className="text-muted">No Tag</p>
      )}
    </div>
  );
}
