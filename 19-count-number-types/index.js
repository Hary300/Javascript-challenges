export const countNumberTypes = (listOfNumbers) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  if (listOfNumbers.length !== 0) {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers[i] > 0) {
        positive++;
      } else if (listOfNumbers[i] < 0) {
        negative++;
      } else {
        zero++;
      }
    }
  }

  return {
    positive,
    negative,
    zero,
  };
};
