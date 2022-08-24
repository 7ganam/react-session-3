import React, { useState } from "react";

function BasedOnOldState() {
  const [count, setCount] = useState(0);

  const increment1Wrong = () => {
    setCount(count + 1);
  };

  const increment5Wrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const increment5Right = () => {
    setCount((oldCount) => oldCount + 1);
    setCount((oldCount) => oldCount + 1);
    setCount((oldCount) => oldCount + 1);
    setCount((oldCount) => oldCount + 1);
    setCount((oldCount) => oldCount + 1);
  };
  return (
    <div className="comp">
      <div className="title">depend on old state example</div>
      <div>{count}</div>

      <button onClick={increment1Wrong}>inc1wrong</button>
      <button onClick={increment5Wrong}>inc5wrong</button>
      <button onClick={increment5Right}>inc5right</button>
    </div>
  );
}

export default BasedOnOldState;
