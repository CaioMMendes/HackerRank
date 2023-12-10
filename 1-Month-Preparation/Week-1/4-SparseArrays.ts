const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

function matchingStrings(strings: string[], queries: string[]) {
  const result: number[] = [];
  queries.map((querie) => {
    let sum = 0;

    strings.map((string) => {
      if (string === querie) {
        sum++;
      }
    });

    result.push(sum);
  });
  return result;
}

console.log(matchingStrings(strings, queries));
