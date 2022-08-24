import React from "react";
import { UserProvider } from "../../contexts/userContext";
import ComponentA from "./ComponentA";
function DeeplyNestedTree() {
  let name = "Ali";

  return (
    <UserProvider value={{ name: name }}>
      <div className="comp">
        <div className="title">context new syntax</div>
        <ComponentA />
      </div>
    </UserProvider>
  );
}

export default DeeplyNestedTree;
