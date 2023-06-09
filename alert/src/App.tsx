import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert>
        {" "}
        Hello <strong>World!</strong>{" "}
      </Alert>
    </>
  );
}

export default App;
