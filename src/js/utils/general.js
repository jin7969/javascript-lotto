export const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

export const isUnderMinimum = (amount, min) => {
  return amount < min;
};

export const isNotThousandUnit = (amount, unit) => {
  return amount % unit !== 0;
};

export const isNotNumber = (number) => {
  return Number.isNaN(number);
};

export const isEmpty = (number) => {
  return number === null;
};

export const isOverlap = (numbers) => {
  return numbers.length !== [...new Set(numbers)].length;
};

export const isOutOfRange = (number, min, max) => {
  return number < min || number > max;
};

export const calculateProfitRate = (totalProfit, usedMoney) => {
  return Math.floor((totalProfit / usedMoney) * 100);
};
