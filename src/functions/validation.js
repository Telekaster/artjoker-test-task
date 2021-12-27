import numberArr from "./numberArr";

export default function validation(code) {
  if (typeof code === "number") {
    const codeArray = numberArr(code);
    if (codeArray.length === 8) {
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
