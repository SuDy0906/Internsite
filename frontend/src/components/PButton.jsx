import React from "react";

const PButton = ({ styles }) => (
  <button type="button" className={`py-2 px-6 font-poppins border-2 border-sky-900 font-medium text-[18px] text-primary hover:text-white bg-transparent hover:bg-sky-900 rounded-[10px] outline-none ${styles}`}>
    5999
  </button>
);

export default PButton;