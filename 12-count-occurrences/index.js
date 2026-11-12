export const countOccurrences = (list, target) => {
  if (list.length === 0) return 0;

  let numberOfTimes = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      numberOfTimes++;
    }
  }

  return numberOfTimes;
};
