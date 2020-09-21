import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Box from "./components/Box";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Box />
      </div>
    </div>
  );
}

export default App;
