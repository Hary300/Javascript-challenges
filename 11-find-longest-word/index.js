export const findLongestWord = (listOfWords) => {
  if (listOfWords.length === 0) return null;

  let longestWord = listOfWords[0];
  for (let i = 1; i < listOfWords.length; i++) {
    if (listOfWords[i].length > longestWord.length) {
      longestWord = listOfWords[i];
    }
  }

  return longestWord;
};
