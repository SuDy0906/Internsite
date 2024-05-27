import React from "react";

const PButton = ({ styles }) => (
  <button type="button" className={`py-2 px-6 font-poppins border-2 border-orange-600 font-medium text-[18px] text-primary hover:text-white bg-transparent hover:bg-orange-600 rounded-[10px] outline-none ${styles}`}>
    5999
  </button>
);

export default PButton;