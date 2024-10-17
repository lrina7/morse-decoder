const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let string = "";
  const words = expr.split("**********");
  for (let word of words) {
    for (let i = 0; i < word.length; i += 10) {
      const morseWord = word.slice(i, i + 10);
      if (morseWord === "0000000000") {
        continue;
      }
      const morseSymbol = morseWord
        .replace(/00/g, "")
        .replace(/10/g, ".")
        .replace(/11/g, "-");
      string += MORSE_TABLE[morseSymbol] || "";
    }
    string += " ";
  }
  return string.trim();
}

module.exports = {
  decode,
};
