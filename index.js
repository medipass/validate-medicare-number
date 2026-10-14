'use strict';

const multipliers = [1, 3, 7, 9, 1, 3, 7, 9];

module.exports = function (cardNumber) {
  if (!cardNumber || typeof cardNumber !== 'string') throw new Error('cardNumber must be a `string`');

  let digitCount = 0;
  let first8Sum = 0;
  let checkDigit = -1;
  let issueNumber = 0;

  for (let index = 0; index < cardNumber.length; index++) {
    const charCode = cardNumber.charCodeAt(index);

    // Allow spaces in formatted card numbers, e.g. `2683 15531 10`.
    if (charCode === 32) continue;

    const digit = charCode - 48;
    if (digit < 0 || digit > 9) return false;

    if (digitCount === 0) {
      if (digit < 2 || digit > 6) return false;
    } else if (digitCount > 10) {
      return false;
    }

    if (digitCount < 8) {
      first8Sum += digit * multipliers[digitCount];
    } else if (digitCount === 8) {
      checkDigit = digit;
    } else {
      issueNumber = (issueNumber * 10) + digit;
    }

    digitCount++;
  }

  if (digitCount !== 10 && digitCount !== 11) return false;

  return issueNumber > 0 && checkDigit === first8Sum % 10;
};
