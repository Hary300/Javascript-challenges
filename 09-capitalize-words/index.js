export const capitalizeWords = (words) => {
  if (words.trim() === '') return '';
  let result = [];
  let isNewWord = false;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ' || words[i] === '\t' || words[i] === '\n') {
      isNewWord = true;
      result.push(words[i]);
      continue;
    }

    if (i === 0 && alphabet.includes(words[i].toLowerCase())) {
      isNewWord = true;
    }

    if (isNewWord && alphabet.includes(words[i].toLowerCase())) {
      result.push(words[i].toUpperCase());
      isNewWord = false;
      continue;
    }

    result.push(words[i].toLowerCase());
  }

  return result.join('');
};
