export default function bonusTwoThousand(promoCode, setResult) {
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

      //   массив парных чисел
      const targetNumbers = [];
      promoCode.map((item, index) => {
        if (neighbours.includes(index)) {
          targetNumbers.push(item);

          const pairs = targetNumbers.length / 2;
          if (pairs === 2) {
            if (targetNumbers[0] < targetNumbers[1]) {
              console.log("первая в паре меньше следующей");
              console.log("Ваш бонус - 2000 грн.");
              setResult("Ваш бонус - 2000 грн.");
              return;
            }
          }
          if (pairs === 3) {
            if (
              targetNumbers[0] < targetNumbers[1] &&
              targetNumbers[2] < targetNumbers[3]
            ) {
              console.log("первая в паре меньше следующей");
              console.log("Ваш бонус - 2000 грн.");
              setResult("Ваш бонус - 2000 грн.");
              return;
            }
          }
        }
      });
    }
  }
}
