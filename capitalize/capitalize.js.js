function capitalize(lowCaseString) {
  if (lowCaseString.length == 0) {
    return "";
  }

  return lowCaseString.charAt(0).toUpperCase() + lowCaseString.slice(1);
}

module.exports = capitalize;
