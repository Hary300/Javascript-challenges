export const findSecondLargest = (numbers) => {
  if (numbers.length <= 1) return null;

  let allTheSame = true;
  for (let i = 0; i < 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j]) {
        allTheSame = false;
      }
    }
  }

  if (allTheSame) return null;
  let largestNumber = numbers[0];
  let secondLargestNumber;

  for (let i = 1; i < numbers.length; i++) {
    if (
      largestNumber < numbers[i] &&
      (secondLargestNumber < largestNumber || !secondLargestNumber)
    ) {
      secondLargestNumber = largestNumber;
      largestNumber = numbers[i];
    } else if (
      largestNumber > numbers[i] &&
      (secondLargestNumber < numbers[i] || !secondLargestNumber)
    ) {
      secondLargestNumber = numbers[i];
    } else {
      continue;
    }
  }

  return secondLargestNumber;
};
