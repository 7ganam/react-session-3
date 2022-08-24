import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [Counter, setCounter] = useState(0);
  const [unChangingState, setUnChangingState] = useState(0);

  // useEffect(() => {
  //   console.log("without second parameter");
  // });

  useEffect(() => {
    console.log("with empty array second parameter");
  }, []);

  useEffect(() => {
    console.log("with Counter second parameter");
  }, [Counter]);

  useEffect(() => {
    console.log("with unChangingState");
  }, [unChangingState]);

  return (
    <div className="comp">
      <div className="title">UseEffectExample</div>
      <div>{Counter}</div>
      <button onClick={() => setCounter((oldCount) => oldCount + 1)}>
        increment
      </button>
    </div>
  );
}

export default UseEffectExample;
