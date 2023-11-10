//<div class="parent">
//  <div class="child">
//    <h1>h1</h1>
//    <h2>h2</h2>
//  </div>
//</div>;

// const heading = React.createElement("h1", { id: "heading" }, "hellow world");

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hellow"),
    React.createElement("h2", { id: "heading" }, "world"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
