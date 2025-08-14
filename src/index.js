import React from "react";
import ReactDOM from "react-dom/client";

import Timeline from "./components/Timeline/Timeline.jsx";

function App() {
  return (
    <div className="app">
      <h1>Timeline Take-Home Assignment</h1>
      <p>Simple timeline React component.</p>

      <Timeline />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);