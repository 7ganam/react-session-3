import React, { useState } from "react";

function StateNoMerge() {
  const [name, setName] = useState({
    firstName: "Ahmed",
    secondName: "Ibrahim",
  });
  return (
    <div className="comp">
      <div className="title">No state merge</div>
      <pre>{JSON.stringify(name, null, 2)} </pre>

      <button
        onClick={() => {
          setName({ ...name, firstName: "Ahmed" });
        }}
      >
        setNameAli
      </button>
      <button
        onClick={() => {
          setName({ ...name, firstName: "Ali" });
        }}
      >
        setNameAhmed
      </button>
    </div>
  );
}

export default StateNoMerge;
