import React from "react";

export default function Circle() {
  return (
    <div>
      <svg
        className="circle"
        height="100px"
        width="100px"
        viewBox="-50 -50 100 100"
      >
        <circle cx="0" cy="0" r="35" />
      </svg>
    </div>
  );
}
