import React from "react";
import spinner from "./img/spinner.svg";

export default () => {
  return (
    <div className='m-auto h-100 w-100  d-flex align-items-center'>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
