function analyzeArray(numArr) {
  let obj = new Object();

  numArr.sort((a, b) => {
    return a - b;
  });

  let lengthArr = numArr.length;
  let max = numArr[lengthArr - 1];
  let min = numArr[0];
  let averageIdx = Math.round(numArr.length / 2);
  let averageNum = numArr[averageIdx];

  obj.average = averageNum;
  obj.min = min;
  obj.max = max;
  obj.length = lengthArr;

  return obj;
}

module.exports = analyzeArray;
