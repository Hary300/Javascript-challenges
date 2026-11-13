export const findCommonElements = (listOfNumber1, listOdNumber2) => {
  if (listOfNumber1.length === 0 || listOdNumber2.length === 0) return [];

  let commonElements = [];
  for (let i = 0; i < listOfNumber1.length; i++) {
    for (let j = 0; j < listOdNumber2.length; j++) {
      if (
        listOfNumber1[i] === listOdNumber2[j] &&
        !commonElements.includes(listOfNumber1[i])
      ) {
        commonElements.push(listOfNumber1[i]);
      }
    }
  }
  return commonElements;
};
