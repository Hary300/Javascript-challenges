export const isSorted = (listOfNumbers) => {
  let isSorted = true;
  if (listOfNumbers.length !== 0 || listOfNumbers.length !== 1) {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers[i] > listOfNumbers[i + 1]) {
        isSorted = false;
        break;
      }
    }
  }
  return isSorted;
};
