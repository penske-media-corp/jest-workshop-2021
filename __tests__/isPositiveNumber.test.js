import { isPositiveNumber } from "../isPositiveNumber";

describe('isPositiveNumber', () => {
    test( 'positive Number is positive', () => {
        expect( isPositiveNumber( 1 ) ).toBe( true );
    });

    test( 'negative  Number is negative', () => {
        expect( isPositiveNumber( -1 ) ).toBe( false );
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            isPositiveNumber('1');
        }).toThrow('Parameter was not a number.');
    });

});
