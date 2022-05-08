import React, { Component, useRef, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import { TodoLayer } from "./context/toDoContext";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
