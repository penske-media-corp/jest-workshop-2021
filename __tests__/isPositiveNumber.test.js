import { isPositiveNumber } from '../isPositiveNumber';

describe('isPositiveNumber', () => {
    test('Returns true when param is number and positive', () => {
        expect(isPositiveNumber(1)).toBe(true);
        expect(isPositiveNumber(1.234)).toBe(true);
    });

    test('Returns false when param is not number or not positive', () => {
        expect(isPositiveNumber(-1)).toBe(false);
        expect(isPositiveNumber('1')).toBe(false);
    });
});
