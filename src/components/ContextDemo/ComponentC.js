import React from "react";
import { UserConsumer } from "../../contexts/userContext";

import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function ComponentC() {
  let user = useContext(UserContext);

  return (
    <div className="comp">
      <UserConsumer>{(user) => <div>{user.name}</div>}</UserConsumer>
      <div>{user.name}</div>
    </div>
  );
}

export default ComponentC;
