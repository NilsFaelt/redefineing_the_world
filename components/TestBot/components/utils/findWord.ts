export const findWord = (word: string, wordToFind: string): string | null => {
  const splittedWord = word.split(" ");
  const foundWord = splittedWord.find((word) => word.includes(wordToFind));
  if (foundWord) return foundWord;
  else return null;
};
