export const findIndex = (numbers, number) => {
  let index = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      index = i;
      break;
    }
  }
  return index;
};
