import React from "react";

function Pill({ tag }) {
  const tagColors = {
    html: "bg-danger",
    css: "bg-primary",
    js: "bg-warning",
    php: "bg-success",
  };

  const tagClass = tagColors[tag] || "bg-secondary";

  return <span className={`badge ${tagClass} me-1`}>{tag}</span>;
}

export default Pill;
