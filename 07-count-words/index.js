export const countWords = (words) => {
  if (words.trim().length === 0) return 0;

  let wordList = words
    .replaceAll('\t', ' ')
    .replaceAll('\n', ' ')
    .trim()
    .split(' ')
    .filter((word) => word !== '');
  return wordList.length;
};
