import React from "react";

interface Props {
  className: any;
}

export const Search1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 19C16.0849 19 19.6667 15.4183 19.6667 11C19.6667 6.58172 16.0849 3 11.6667 3C7.24839 3 3.66667 6.58172 3.66667 11C3.66667 15.4183 7.24839 19 11.6667 19Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M21.6667 21L17.3167 16.65" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
