export const separateNumbers = (listOfNumbers) => {
  let positiveNumbers = [];
  let negativeNumbers = [];

  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > 0) {
      positiveNumbers.push(listOfNumbers[i]);
    }

    if (listOfNumbers[i] < 0) {
      negativeNumbers.push(listOfNumbers[i]);
    }
  }

  return {
    positive: positiveNumbers,
    negative: negativeNumbers,
  };
};
