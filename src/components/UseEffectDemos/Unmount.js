import React, { useState } from "react";
import UnmountChild from "./UnmountChild";
import LoggingChild from "./LoggingChild";
function Unmount() {
  const [ShowCHild, setShowCHild] = useState(true);

  return (
    <div className="comp">
      <div className="title">UseEffect Unmount example</div>
      <button onClick={() => setShowCHild((old) => !old)}>remove child</button>
      {/* {ShowCHild && <UnmountChild></UnmountChild>} */}
      {ShowCHild && <LoggingChild></LoggingChild>}
    </div>
  );
}

export default Unmount;
