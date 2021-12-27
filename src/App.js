import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
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
        return "Промокод не действительный";
      }
    } else {
      console.log("Промокод не действительный");
      return "Промокод не действительный";
    }
  }
  // -------------------------------------------

  function decryptor(code) {
    const promoCode = validation(code);
    console.log("Промокод", promoCode);

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
    }
  }

  return (
    <div className="App">
      <Input handler={buttonHandler} />
      <p>{result}</p>
    </div>
  );
}

export default App;
