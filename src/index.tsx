import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { App } from "./components/App";

// ReactDOM.render(
//   <React.StrictMode></React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
render(<App />, rootElement);
