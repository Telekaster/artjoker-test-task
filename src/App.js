import { useState } from "react";
import Input from "./components/Input";
import decryptor from "./functions/decryptor";

function App() {
  const [result, setResult] = useState();

  const buttonHandler = (value) => {
    decryptor(value, setResult);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Input handler={buttonHandler} />
        <p>{result}</p>
      </div>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        <h3 style={{ textAlign: "center" }}>Примеры промокода:</h3>
        <p>48183276 - промокод на 100 грн</p>
        <p>73289388 - промокод на 1000 грн</p>
        <p>37283988 - промокод на 2000 грн</p>
        <p>84533920 - промокод не действителен</p>
      </div>
    </div>
  );
}

export default App;
