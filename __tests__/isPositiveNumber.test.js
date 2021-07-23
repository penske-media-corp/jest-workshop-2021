import {isPositiveNumber} from "../isPositiveNumber";

describe('isPositiveNumber', () => {
    test('Returns true when number > 0 is appsed', () => {
        expect(isPositiveNumber(1)).toBe(true);
    });

    test('Return false when 0 is passed ', () => {
        expect(isPositiveNumber(0)).toBe(false);
    });

    test('Throw exception when string passed', () => {
        expect(() => {
            isPositiveNumber('abc');
        }).toThrow('Parameter was not a number.');
    });
});
