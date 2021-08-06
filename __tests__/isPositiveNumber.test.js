import { isPositiveNumber } from '../isPositiveNumber';

describe('isPositiveNumber', () => {
    test('Returns true if number is positive', () => {
        expect(isPositiveNumber(5)).toBe(true);
    });

    test('Returns false if number is negative', () => {
        expect(isPositiveNumber(-5)).toBe(false);
    });

    test('Returns false if number is zero', () => {
        expect(isPositiveNumber(0)).toBe(false);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            isPositiveNumber('unittest');
        }).toThrow('Parameter was not a number.');
    });
});