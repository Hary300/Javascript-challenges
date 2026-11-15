export const removeElement = (listOfElements, elementTarget) => {
  const result = [];
  for (let i = 0; i < listOfElements.length; i++) {
    if (listOfElements[i] !== elementTarget) {
      result.push(listOfElements[i]);
    }
  }
  return result;
};
