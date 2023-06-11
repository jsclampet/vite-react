import "./App.css";

import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>My Alert!</Alert>
      )}
      <Button
        btnColor="info"
        children="Hello!!!"
        onClick={() => setAlertVisible(true)}
      />
    </>
  );
}

export default App;
