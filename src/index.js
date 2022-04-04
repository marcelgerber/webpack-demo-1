import React from "react";
import ReactDOM from "react-dom";
document.getElementById("button").addEventListener("click", () => {
  console.log("clicked button");
});

ReactDOM.render(
  React.createElement("div", undefined, "Hello World"),
  document.getElementById("react-root")
);
