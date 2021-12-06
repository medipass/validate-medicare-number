'use strict';

const multipliers = [1, 3, 7, 9, 1, 3, 7, 9];

module.exports = function (cardNumber) {
  if (!cardNumber || typeof cardNumber !== 'string') throw new Error('cardNumber must be a `string`');
  if (cardNumber.length !== 10) return false;

  try {
    const cardNumbers = cardNumber.split('').map(number => parseInt(number, 10));
    if (cardNumbers[9] === 0) return false;
    const first8 = cardNumbers.slice(0, 8);
    const first8Sum = first8.reduce(function (currentSum, number, index) {
      return currentSum + (number * multipliers[index]);
    }, 0);
    const remainder = first8Sum % 10;
    return cardNumbers[8] === remainder;
  } catch (err) {
    return false;
  }
}
