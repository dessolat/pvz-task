export const getEndingByNumber = (num: number) => {
  if (num % 10 === 1 && num % 100 !== 11) return '';

  if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) return 'а';

  return 'ов';
};
