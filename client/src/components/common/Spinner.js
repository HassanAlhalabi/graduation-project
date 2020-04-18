import React from "react";
import spinner from "./img/spinner.gif";

export default () => {
  return (
    <div className='m-auto'>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
