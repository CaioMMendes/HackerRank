// const s = "07:05:45PM";
const s = "12:40:22AM";

function timeConversion(s: string) {
  const hourNumber = Number(s.slice(0, 2));
  if (s.includes("PM")) {
    const hour =
      hourNumber > 12
        ? hourNumber - 12
        : hourNumber < 12
        ? hourNumber + 12
        : hourNumber;
    const hourString = `${hour}`;
    return hourString.length === 1
      ? "0" + hourString + s.slice(2, 8)
      : hourString + s.slice(2, 8);
  } else {
    const hour =
      hourNumber > 12
        ? hourNumber - 12
        : hourNumber < 12
        ? hourNumber
        : hourNumber - 12;
    const hourString = `${hour}`;
    return hourString.length === 1
      ? "0" + hourString + s.slice(2, 8)
      : hourString + s.slice(2, 8);
  }
}

console.log(timeConversion(s));
