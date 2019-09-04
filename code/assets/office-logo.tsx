import * as React from "react";

export const OfficeLogo = props => (
  <svg viewBox="0 0 32 32" {...props}>
    <g data-name="STYLE = COLOR">
      <path
        d="M30.667 2H9.333A1.333 1.333 0 008 3.333V9l12 3.5L32 9V3.333A1.333 1.333 0 0030.667 2z"
        fill="#41a5ee"
      />
      <path fill="#2b7cd3" d="M32 9L8 9 8 16 20 19.5 32 16 32 9z" />
      <path fill="#185abd" d="M32 16L8 16 8 23 20 26.5 32 23 32 16z" />
      <path
        d="M32 23H8v5.667A1.333 1.333 0 009.333 30h21.334A1.333 1.333 0 0032 28.667z"
        fill="#103f91"
      />
      <path
        d="M16.667 7H8v19h8.667A1.337 1.337 0 0018 24.667V8.333A1.337 1.337 0 0016.667 7z"
        opacity={0.1}
      />
      <path
        d="M15.667 8H8v19h7.667A1.337 1.337 0 0017 25.667V9.333A1.337 1.337 0 0015.667 8z"
        opacity={0.2}
      />
      <path
        d="M15.667 8H8v17h7.667A1.337 1.337 0 0017 23.667V9.333A1.337 1.337 0 0015.667 8z"
        opacity={0.2}
      />
      <path
        d="M14.667 8H8v17h6.667A1.337 1.337 0 0016 23.667V9.333A1.337 1.337 0 0014.667 8z"
        opacity={0.2}
      />
      <path
        data-name="Back Plate"
        d="M1.333 8h13.334A1.333 1.333 0 0116 9.333v13.334A1.333 1.333 0 0114.667 24H1.333A1.333 1.333 0 010 22.667V9.333A1.333 1.333 0 011.333 8z"
        fill="#185abd"
      />
      <path
        d="M11.95 21h-1.8l-2.1-6.9-2.2 6.9h-1.8l-2-10h1.8l1.4 7 2.1-6.8h1.5l2 6.8 1.4-7h1.7z"
        fill="#fff"
      />
      <path fill="none" d="M-0.00004 0H31.99996V32H-0.00004z" />
    </g>
  </svg>
);

OfficeLogo.defaultProps = {
  width: 32,
  height: 32
};
