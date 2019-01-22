const validateProviderNumber = require('./index');

test('throws if the Medicard card number is not provided', () => {
  expect(() => validateProviderNumber()).toThrowError();
});

test('throws if the Medicard card number is not a string', () => {
  expect(() => validateProviderNumber(123)).toThrowError();
});

test('returns false for an invalid Medicare card number (has alphabetic character)', () => {
  expect(validateProviderNumber('95050739A')).toBeFalsy();
});

test('returns false for an invalid Medicare card number (length not equal to 10)', () => {
  expect(validateProviderNumber('695050739')).toBeFalsy();
});

test('returns false for an invalid Medicare card number (incorrect check digit)', () => {
  expect(validateProviderNumber('6950507381')).toBeFalsy();
});

test('returns true for a valid Medicare card number', () => {
  expect(validateProviderNumber('6950507391')).toBeTruthy();
});
