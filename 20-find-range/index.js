export const findRange = (listOfNumbers) => {
  let range = null;
  if (listOfNumbers.length !== 0) {
    let largestNumber = listOfNumbers[0];
    let smallestNumber = listOfNumbers[0];

    for (let i = 0; i < listOfNumbers.length; i++) {
      if (largestNumber < listOfNumbers[i]) {
        largestNumber = listOfNumbers[i];
        continue;
      }

      if (smallestNumber > listOfNumbers[i]) {
        smallestNumber = listOfNumbers[i];
      }
    }

    range = largestNumber - smallestNumber;
  }
  return range;
};
