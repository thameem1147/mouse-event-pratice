import React, { useState } from "react";

function App() {
  const [initial, final] = useState("hello");
  function buttonHandler() {
    final("welcome");
  }
  const color2 = { backgroundColor: "black" };
  const color = { backgroundColor: "white" };
  const [colo1, colo2] = useState(color);
  function mousehandler() {
    colo2(color2);
  }
  function mouseout() {
    colo2(color);
  }
  return (
    <div className="container">
      <h1>{initial}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={buttonHandler}
        style={colo1}
        onMouseOver={mousehandler}
        onMouseOut={mouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
