let alphabetArrayLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let alphabetArrayUp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function caesarCipher(str, num) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (alphabetArrayUp.indexOf(letter) == -1 && alphabetArrayLow.indexOf(letter) == -1) {
      newStr += letter;
    } else if (alphabetArrayUp.indexOf(letter) !== -1) {
      let idx = alphabetArrayUp.indexOf(letter);
      let newIdx =
        idx + num > alphabetArrayUp.length - 1
          ? Math.abs(alphabetArrayUp.length - (idx + num))
          : idx + num;
      newStr += alphabetArrayUp[newIdx];
    } else if (alphabetArrayLow.indexOf(letter) !== -1) {
      let idx = alphabetArrayLow.indexOf(letter);
      let newIdx =
        idx + num > alphabetArrayLow.length - 1
          ? Math.abs(alphabetArrayLow.length - (idx + num))
          : idx + num;
      newStr += alphabetArrayLow[newIdx];
    } else {
      return new Error("error check the code!");
    }
  }
  return newStr;
}

module.exports = caesarCipher;
