import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.jsx";
import Activity from "./pages/Activity/index.js";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Activity />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
