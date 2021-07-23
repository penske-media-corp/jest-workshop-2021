/// Tested Code
import { add, commaSeparatedStringToArray, addPositiveNumbers, latestRollingStoneArticleTitle, addListItem } from '../index';

describe('add', () => {
    test('Returns the correct answer', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            add('1', 3);
        }).toThrow('Parameter was not a number.');

        expect(() => {
            add(1, '3');
        }).toThrow('Parameter was not a number.');
    });
});

describe('addPositiveNumbers', () => {
    test('Returns the correct answer', () => {
        expect(addPositiveNumbers(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            addPositiveNumbers('1', 3);
        }).toThrow('Parameter was not a number.');
    });

    test('Throws when Negative Number Passed', () => {
        expect(() => {
            addPositiveNumbers(-1, 3);
        }).toThrow('Parameter was not a number.');
    });
});

describe( 'commaSeparatedStringToArray', () => {

    test( 'non string thrwos', () => {
        expect( () => {
            commaSeparatedStringToArray( 123);
        }).toThrow( 'Parameter was not a string.' );
    });

    test( 'splits with 2 commas', () => {
        expect(
            commaSeparatedStringToArray( 'It feels like a perfect night, To dress up like hipsters, And make fun of our exes' )
        ).toStrictEqual( [
            'It feels like a perfect night',
            ' To dress up like hipsters',
            ' And make fun of our exes'
        ]);
    });
});

describe( 'addListItem', () => {
    beforeEach( () => {
        document.body.innerHTML = '<ul id="ul"><li id="one-li">one</li></ul> <ol id="ol"><li id="one-li">one</li></ol>';
    });

    test( 'adds item to ul', () => {
        const element = document.getElementById( 'ul' );
        addListItem( element, 'two' );
        expect( document.body.innerHTML ).toBe( '<ul id="ul"><li id="one-li">one</li><li>two</li></ul> <ol id="ol"><li id="one-li">one</li></ol>' );
    });

    test( 'adds item to ol', () => {
        const element = document.getElementById( 'ol' );
        addListItem( element, 'two' );
        expect( document.body.innerHTML ).toBe( '<ul id="ul"><li id="one-li">one</li></ul> <ol id="ol"><li id="one-li">one</li><li>two</li></ol>' );
    });
});
