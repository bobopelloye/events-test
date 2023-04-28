const { validateDates } = require('../utils/validators');

describe('Date Validation', () => {
  test('should return true for valid dates', () => {
    expect(validateDates('2022-04-28', '2022-04-29')).toBe(true);
  });

  test('should return false for invalid dates', () => {
    expect(validateDates('2022-04-29', '2022-04-28')).toBe(false);
  });

  test('should return false for invalid start date', () => {
    expect(validateDates('invalid date', '2022-05-28')).toBe(false);
  });

  test('should return false for invalid end date', () => {
    expect(validateDates('2022-04-28', 'invalid date')).toBe(false);
  });
});