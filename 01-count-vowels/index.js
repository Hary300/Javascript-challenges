export const countVowels = (text) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let totalVowel = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      totalVowel++;
    }
  }

  return totalVowel;
};
