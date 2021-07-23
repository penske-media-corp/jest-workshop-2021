import { isPositiveNumber } from '../isPositiveNumber';

describe('is positive number', () => {
    test('Returns false if not positive number', () => {
        expect(isPositiveNumber(-1)).toBe(false);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            isPositiveNumber('test');
        }).toThrow('Parameter was not a number.');
    });
});