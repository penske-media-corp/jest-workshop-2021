import {add, addListItem, addPositiveNumbers, commaSeparatedStringToArray} from '../index';

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

describe( 'addListItem', () => {
    const list = document.createElement( 'ul' );
    const text = 'Jest Workshop 2021';

    test( 'Adds item to list', () => {
        addListItem(list, text);
        expect(list.children[0].innerHTML).toBe( text );
    });
});

describe( 'commaSeparatedStringToArray', () => {
    const string = '1,2,3,4';
    const array = ['1', '2', '3', '4'];

    test('Returns array with given values', () => {
        expect(commaSeparatedStringToArray(string)).toEqual(array);
    });

    test('Returns array with a single value', () => {
        expect(commaSeparatedStringToArray(array[0])).toEqual([array[0]]);
    });

    test( 'Throws an error when argument is not a string', () => {
        expect(() => {commaSeparatedStringToArray(array)}).toThrow('Parameter was not a string.');
    });
});

describe( 'addPositiveNumbers', () => {
    test( 'Returns expected result', () => {
        expect(addPositiveNumbers(1,2)).toBe(3);
    });

    test( 'Throws an error when passed a negative number', () => {
        expect(() => {addPositiveNumbers(1,-2)}).toThrow('Parameter was not a number.');
    });

    test( 'Throws an error when passed a string', () => {
        expect(() => {addPositiveNumbers(1,'2')}).toThrow('Parameter was not a number.');
    });
});

describe( 'latestRollingStoneArticleTitle', () => {
    // TODO: mock fetch, have fun with it.
});
