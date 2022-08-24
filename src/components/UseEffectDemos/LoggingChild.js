import React, { useEffect, useRef, useState } from "react";

function LoggingChild() {
  useEffect(() => {
    let old = 0;
    const intervalID = setInterval(() => {
      old = old + 1;
      console.log("child is logging: :>> ", old);
    }, 1000);

    return () => {
      console.log("unmounting logging child");
      clearInterval(intervalID);
    };
  }, []);

  return <div className="comp">Child is logging</div>;
}

export default LoggingChild;
