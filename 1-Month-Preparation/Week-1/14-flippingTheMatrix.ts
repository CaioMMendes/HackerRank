const matrix = [
  [119, 114, 42, 112],
  [56, 125, 101, 49],
  [15, 78, 56, 43],
  [62, 98, 83, 108],
];

function flippingMatrix(matrix) {
  // Write your code here
  const returnBigger = (n1, n2, n3, n4) => {
    const sorted = [n1, n2, n3, n4].sort((a, b) => b - a);
    return sorted[0];
  };
  const n = matrix.length / 2;
  let sum = 0;
  for (let coluna = 0; coluna < n; coluna++) {
    for (let linha = 0; linha < n; linha++) {
      //comparações
      sum += returnBigger(
        matrix[coluna][linha],
        matrix[matrix.length - 1 - coluna][linha],
        matrix[coluna][matrix.length - 1 - linha],
        matrix[matrix.length - 1 - coluna][matrix.length - 1 - linha]
      );
    }
  }
  return sum;
}

console.log(flippingMatrix(matrix));
