const a = [1, 2, 3, 4, 3, 2, 1];
console.log("-----------------");
function lonelyinteger(a: number[]) {
  // Write your code here
  let result = 0;

  a.map((number) => {
    const count = a.filter((secondNumber) => secondNumber === number);
    if (count.length === 1) {
      result = number;
    }
  });

  return result;
}

console.log(lonelyinteger(a));
