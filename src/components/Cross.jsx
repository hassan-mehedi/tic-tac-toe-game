import React from "react";

export default function Cross() {
  return (
    <div>
      <svg
        className="cross"
        height="100px"
        width="100px"
        viewBox="-50 -50 100 100"
      >
        <line x1="-35" y1="-35" x2="35" y2="35" />
        <line x1="-35" y1="35" x2="35" y2="-35" />
      </svg>
    </div>
  );
}
