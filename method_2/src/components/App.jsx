import React, { useState } from "react";

function App() {
  const [initial, final] = useState("hello");
  function buttonHandler() {
    final("welcome");
  }
  const [colo1, colo2] = useState(false);
  function mousehandler() {
    colo2(true);
  }
  function mouseout() {
    colo2(false);
  }
  return (
    <div className="container">
      <h1>{initial}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={buttonHandler}
        style={{ backgroundColor: colo1 ? "black" : "white" }}
        onMouseOver={mousehandler}
        onMouseOut={mouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
