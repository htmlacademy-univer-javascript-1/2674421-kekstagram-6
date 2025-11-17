/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине, и false,
 если строка длиннее. Эта функция нам пригодится для валидации формы. */

const stringLength = function (currString, maxLength) {
  return currString.length <= maxLength;
};

stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

/* Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
которые одинаково читаются и слева направо и справа налево. */

const palindrome = function (word) {
  word = word.toLowerCase().replace(/\s+/g, '');
  for (let i = 0; i < word.length/2; i += 1) {
    if (word[i] !== word[word.length-i-1]) {
      return false;
    }
  }
  return true;
};

palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
palindrome('Лёша на полке клопа нашёл');
