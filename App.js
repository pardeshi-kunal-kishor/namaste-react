import React from "react";
import ReactDOM from "react-dom/client";

/* 
  const heading = React.createElement("h1", { id: "heading" }, "hellow world"); 
*/

/* 
  const heading = (
    <div class="parent">
      <div class="child">
        <h1 id="heading">hellow</h1>
        <h2 id="heading">world</h2>
      </div>
    </div>
  ); 
*/

const Heading = () => (
  <div class="parent">
    <div class="child">
      <h1 id="heading">hellow</h1>
      <h2 id="heading">world</h2>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<Heading />);
