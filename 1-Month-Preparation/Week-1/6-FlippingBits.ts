const n = 9;

function flippingBits(n: number) {
  const binary = n.toString(2).padStart(32, "0");
  const flippedBinary = binary.split("").map((number) => {
    return number === "0" ? 1 : 0;
  });
  return parseInt(flippedBinary.join(""), 2);
}

console.log(flippingBits(n));
