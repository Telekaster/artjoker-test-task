import { useState } from "react";

export default function Input({ handler }) {
  const [value, setValue] = useState();

  const inputHandler = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <input
        name="input"
        type="number"
        value={value}
        onChange={inputHandler}
      ></input>
      <button name="button" type="button" onClick={() => handler(value)}>
        Активировать промокод
      </button>
    </div>
  );
}
