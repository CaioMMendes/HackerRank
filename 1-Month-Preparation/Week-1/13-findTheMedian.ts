const arr = [5, 3, 1, 2, 4];

function findMedian(arr) {
  // Write your code here

  const sortedArray = arr.sort((a, b) => a - b);
  const middle = Math.floor(sortedArray.length / 2);
  return sortedArray[middle];
}

console.log(findMedian(arr));
