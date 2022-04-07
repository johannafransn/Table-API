import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./custom.scss";

import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
