export default function numberArr(num) {
  const result = [];
  while (num >= 1) {
    const n = num % 10;

    num = Math.floor(num / 10);

    result.unshift(n);
  }
  return result;
}
