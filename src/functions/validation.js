export default function validation(code, setResult) {
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
