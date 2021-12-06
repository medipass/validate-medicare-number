const validateMedicareNumber = require('./index');

test('throws if the Medicard card number is not provided', () => {
  expect(() => validateMedicareNumber()).toThrowError();
});

test('throws if the Medicard card number is not a string', () => {
  expect(() => validateMedicareNumber(123)).toThrowError();
});

test('returns false for an invalid Medicare card number (has alphabetic character)', () => {
  expect(validateMedicareNumber('95050739A')).toBeFalsy();
});

test('returns false for an invalid Medicare card number (length not equal to 10)', () => {
  expect(validateMedicareNumber('695050739')).toBeFalsy();
});

test('returns false for an invalid Medicare card number (incorrect check digit)', () => {
  expect(validateMedicareNumber('6950507381')).toBeFalsy();
});

test('returns false for an invalid Medicare card number (last digit is zero)', () => {
  expect(validateMedicareNumber('6950507380')).toBeFalsy();
});

test('returns true for a valid Medicare card number', () => {
  expect(validateMedicareNumber('6950507391')).toBeTruthy();
});
