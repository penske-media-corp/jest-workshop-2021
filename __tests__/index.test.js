import { add, addListItem, commaSeparatedStringToArray, addPositiveNumbers, latestRollingStoneArticleTitle } from '../index';
import {isPositiveNumber} from '../isPositiveNumber';

describe('add', () => {
    test('Returns the correct answer', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            add('1', 3);
        }).toThrow('Parameter was not a number.');
    });
});

test( 'addListItem', () => {
    const el = document.createElement('ul');
    addListItem( el, 'Item1');
    expect(el.childElementCount).toBe(1);
    expect(el.children[0].nodeName).toBe('LI');
    expect(el.children[0].textContent).toBe('Item1');

    addListItem( el, 'Item2');
    expect(el.childElementCount).toBe(2);
    expect(el.children[1].nodeName).toBe('LI');
    expect(el.children[1].textContent).toBe('Item2');
} );

describe( 'commaSeparatedStringToArray', () => {
    test( 'Exception', () => {
        expect(() => {
            commaSeparatedStringToArray([]);
        }).toThrow('Parameter was not a string.')
    });
    test( 'split', () => {
        expect(commaSeparatedStringToArray('1,2')).toEqual( [ '1', '2' ] );
        expect(commaSeparatedStringToArray('string')).toEqual( [ 'string' ] );
        expect(commaSeparatedStringToArray('s1')).toEqual( [ 's1' ] );
        expect(commaSeparatedStringToArray('1,2')).not.toEqual( [ 1, 2 ] );
    } );
} )

describe( 'addPositiveNumbers', () => {
    test( 'Exception', () => {
        expect( () => {
            addPositiveNumbers( '1', '1' );
        } ).toThrow('Parameter was not a number.')
        expect( () => {
            addPositiveNumbers( '1', 1 );
        } ).toThrow('Parameter was not a number.')
        expect( () => {
            addPositiveNumbers( 1, '1' );
        } ).toThrow('Parameter was not a number.')
        expect( () => {
            addPositiveNumbers( -1, 1 );
        } ).toThrow('Parameter was not a number.')
        expect( () => {
            addPositiveNumbers( 1, -1 );
        } ).toThrow('Parameter was not a number.')
    } );
    test ('1+1=2', () => {
        expect( addPositiveNumbers( 1, 1 ) ).toBe(2);
    });
});

describe( 'latestRollingStoneArticleTitle', () => {

});
