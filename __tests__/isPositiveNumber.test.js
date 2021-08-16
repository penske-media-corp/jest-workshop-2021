import { isPositiveNumber } from '../isPositiveNumber';

describe('isPositiveNumber', () => {
    test('Returns true if number is positive', () => {
        expect(isPositiveNumber(1)).toBeTruthy();
        expect(isPositiveNumber(1)).toBeTruthy();
        expect(isPositiveNumber(5)).toBeTruthy();
        expect(isPositiveNumber(1.234)).toBeTruthy();
    });

    test('Returns false if number is negative', () => {
        expect(isPositiveNumber(-1)).toBeFalsy();
        expect(isPositiveNumber(-5)).toBeFalsy();
    });

    test('Returns false if number is zero', () => {
        expect(isPositiveNumber(0)).toBeFalsy();
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            isPositiveNumber('1');
        }).toThrow('Parameter was not a number.');
        expect(() => {
            isPositiveNumber('abc');
        }).toThrow('Parameter was not a number.');
    });
});