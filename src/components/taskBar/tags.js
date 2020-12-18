import React from "react";
import { useSelector } from "react-redux";

export default function Tags({ value, onchange }) {
  const tags = useSelector((state) => state.Tasks.Tags);
  return (
    <div className="tag-card text-center">
      {tags.length > 0 ? (
        tags.map((tag, i) => {
          return (
            <p class="btn-tag" onClick={() => onchange(tag)} key={i}>
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
