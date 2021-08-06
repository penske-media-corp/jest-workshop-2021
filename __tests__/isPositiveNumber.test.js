import { isPositiveNumber } from '../isPositiveNumber';

describe('isPositiveNumber', () => {

    test('True', () => {
        expect(isPositiveNumber(1)).toBeTruthy();
    });

    test('False', () => {
        expect(isPositiveNumber(-1)).toBeFalsy()
        expect(isPositiveNumber(0)).toBeFalsy();
    });

    test( 'Exception', () => {
       expect(() => {
           isPositiveNumber('string')
       }).toThrow('Parameter was not a number.');
    });

});
