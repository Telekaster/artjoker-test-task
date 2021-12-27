export default function bonusThousand(promoCode, setResult) {
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

  if (neighbours.length >= 4 && neighbours.length % 2 === 0) {
    console.log("Минимум две пары");
    //следующая после первой пары
    if (promoCode[neighbours[1] + 1] % 2 === 0) {
      console.log("следующая чётная");

      console.log("Ваш бонус - 1000 грн.");
      setResult("Ваш бонус - 1000 грн.");
      return "Ваш бонус - 1000 грн.";
    }
  }
}
