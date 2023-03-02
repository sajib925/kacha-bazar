import React from "react";

const CarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
      className="flex-shrink-0 h-4 w-4 text-emerald-600"
      viewBox="0 0 24 24"
    >
      <path d="M1 3H16V16H1z"></path>
      <path d="M16 8L20 8 23 11 23 16 16 16 16 8z"></path>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

export default CarIcon;
