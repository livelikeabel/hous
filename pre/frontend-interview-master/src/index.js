import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Root from "./Root";

window.axios = axios;

ReactDOM.render(<Root />, document.getElementById("root"));
