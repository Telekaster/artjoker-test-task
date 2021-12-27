import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();
  const buttonHandler = (value) => {
    decryptor(value);
  };
  // -------------------------------------------
  function validation(code) {
    if (typeof code === "number") {
      let string = "" + code;

      if (string.length === 8) {
        const codeStringArray = string.split("");
        const codeArray = [];
        codeStringArray.map((item) => codeArray.push(Number(item)));
        return codeArray;
      } else {
        console.log("Промокод не действительный");
        setResult("Промокод не действительный");
        return;
      }
    } else {
      console.log("Промокод не действительный");
      setResult("Промокод не действительный");
      return;
    }
  }
  // -------------------------------------------

  function decryptor(code) {
    const promoCode = validation(code);
    console.log("Промокод", promoCode);
    if (promoCode) {
      // bonus 1000
      const indexOfOdd = [];
      const neighbours = [];

      promoCode.map((item, index) => {
        // индексы нечётных
        if (item % 2 !== 0) {
          indexOfOdd.push(index);
        }
      });

      console.log("Индексы нечётных", indexOfOdd);
      for (let index = 0; index < indexOfOdd.length; index++) {
        const item = indexOfOdd[index];

        if (
          indexOfOdd[index] - indexOfOdd[index - 1] === 1 ||
          indexOfOdd[index + 1] - indexOfOdd[index] === 1
        ) {
          neighbours.push(item);

          console.log("индексы соседних", neighbours);
        }
      }

      if (neighbours.length >= 4) {
        console.log("Минимум две пары");
        //следующая после первой пары
        if (promoCode[neighbours[1] + 1] % 2 === 0) {
          console.log("следующая чётная");

          console.log("Ваш бонус - 1000 грн.");
          setResult("Ваш бонус - 1000 грн.");
          return;
        }
      }

      // bonus 100
      let sumOfEvenNumbers = 0;
      let sumOfOddNumbers = 0;

      for (let item of promoCode) {
        if (item % 2 === 0) {
          const even = item;
          sumOfEvenNumbers += even;
        }
        if (item % 2 !== 0) {
          const odd = item;
          sumOfOddNumbers += odd;
        }
      }

      if (sumOfEvenNumbers > sumOfOddNumbers) {
        console.log("Ваш бонус - 100 грн.");
        setResult("Ваш бонус - 100 грн.");
        return;
      }

      console.log("Промокод не действителен");
      setResult("Промокод не действителен");
      return;
    }
  }

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
