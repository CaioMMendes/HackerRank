const A = [2, 1, 3];
const B = [7, 8, 9];
const k = 10;

function twoArrays(k: number, A: number[], B: number[]) {
  const crescA = A.sort((a, b) => a - b);
  const descB = B.sort((a, b) => b - a);
  const result = [];

  for (let i = 0; A.length > i; i++) {
    if (crescA[i] + descB[i] < k) {
      result.push(false);
    }
  }
  return result.includes(false) ? "NO" : "YES";
}

console.log(twoArrays(k, A, B));
