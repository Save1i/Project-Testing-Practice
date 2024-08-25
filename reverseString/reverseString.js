function reverseString(str) {
  let le = "";
  for (let i = str.length - 1; i >= 0; i--) {
    le += str.charAt(i);
  }
  return le;
}

module.exports = reverseString;
