export const findMostFrequent = (listOfNumber) => {
  if (listOfNumber.length === 0) return null;

  let number = listOfNumber[0];
  let mostNumberOfTimes = 1;
  let currentNumberOfTimes = 1;
  let alreadyCheckedNumbers = [];
  for (let i = 0; i < listOfNumber.length; i++) {
    if (alreadyCheckedNumbers.includes(listOfNumber[i])) continue;

    for (let j = 0; j < listOfNumber.length; j++) {
      if (j === i) continue;
      if (listOfNumber[i] === listOfNumber[j]) {
        currentNumberOfTimes++;
      }
    }

    if (mostNumberOfTimes < currentNumberOfTimes) {
      mostNumberOfTimes = currentNumberOfTimes;
      currentNumberOfTimes = 1;
      number = listOfNumber[i];
    }

    alreadyCheckedNumbers.push(listOfNumber[i]);
  }

  return number;
};
