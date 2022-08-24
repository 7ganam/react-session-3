import React, { useEffect } from "react";

function UnmountChild() {
  useEffect(() => {
    console.log("child useEffect ran");
    return () => {
      console.log("child is getting umounted");
    };
  }, []);

  return <div className="comp">UnmountChild</div>;
}

export default UnmountChild;
