const s = [2, 2, 1, 3, 2, 4, 5, 2, 1, 3, 2, 1, 2, 2, 1, 3, 1, 1, 1];
const d = 4;
const m = 2;
console.log("----------------------------------");
function birthday(s: number[], d: number, m: number) {
  const arrayWithoutBigNumbers = s.filter((value) => value <= d);
  const result = [];
  for (let i = 0; i < arrayWithoutBigNumbers.length - m + 1; i++) {
    let soma = 0;
    const array = [];
    for (let j = 0; j < m; j++) {
      soma += arrayWithoutBigNumbers[i + j];
      array.push(arrayWithoutBigNumbers[i + j]);
    }
    if (soma === d) {
      const sortedArray = array.sort((a, b) => a - b);
      // const stringSortedArray = JSON.stringify(sortedArray);
      // JSON.stringify(result).includes(stringSortedArray) === false &&
      // Não precisa verificar se ja existe
      result.push(sortedArray);
    }
  }

  return result.length;
}

console.log(birthday(s, d, m));
