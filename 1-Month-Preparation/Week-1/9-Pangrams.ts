const s = "We promptly judged antique ivory buckles for the next prize";

function pangrams(s: string) {
  const lowerCase = s.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSplited = alphabet.split("");
  const result = alphabetSplited.map((letter) => {
    return lowerCase.includes(letter);
  });
  return result.includes(false) ? "not pangram" : "pangram";
}

console.log(pangrams(s));
