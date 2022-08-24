import React, { useEffect, useState } from "react";

function FetchOnMount() {
  const [Post, setPosts] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log("post :>> ", json);
        setPosts(json);
      });
  }, []); //TODO: what will happen if we removed the [] ?

  return (
    <div className="comp">
      <div className="title">Http with useEffect</div>
      <pre>{JSON.stringify(Post, null, 2)}</pre>
    </div>
  );
}

export default FetchOnMount;
