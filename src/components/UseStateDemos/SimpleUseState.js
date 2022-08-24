import React, { useState } from "react";

function SimpleUseState() {
  const [name, setName] = useState("Ahmed");
  return (
    <div className="comp">
      <div className="title">simple state example</div>
      <div>{name} </div>

      <button
        onClick={() => {
          setName("Ali");
        }}
      >
        setNameAli
      </button>
      <button
        onClick={() => {
          setName("Ahmed");
        }}
      >
        setNameAhmed
      </button>
    </div>
  );
}

export default SimpleUseState;
