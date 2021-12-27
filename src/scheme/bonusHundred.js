export default function bonusHundred(promoCode, setResult) {
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
    setResult("Ваш бонус - 100 грн.");
    return;
  }

  setResult("Промокод не действителен");
  return;
}
