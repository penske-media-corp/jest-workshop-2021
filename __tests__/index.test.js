import { add, addListItem, addPositiveNumbers, commaSeparatedStringToArray, latestRollingStoneArticleTitle } from '../index';

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

describe('addListItem', () => {
    const ul     = document.createElement('ul');

    let expected = document.createElement('ul');
    let li       = document.createElement('li');
    li.appendChild(document.createTextNode('abc'));
    expected.appendChild(li);

    test('Returns the correct answer', () => {
        addListItem(ul,'abc');
        expect(ul).toStrictEqual(expected);
    });

});

describe('commaSeparatedStringToArray', () => {
    const testString = 'Hello, PMC';

    test('Returns Array', () => {
        expect(commaSeparatedStringToArray(testString)).toEqual(['Hello',' PMC']);
    });

    test('RThrows Exception when non string is passed', () => {
        expect(() => {
            commaSeparatedStringToArray(123);
        }).toThrow('Parameter was not a string.');
    });

});

describe('addPositiveNumbers', () => {
    const testString = 'Hello, PMC';

    test('Returns Array', () => {
        expect(addPositiveNumbers(1,1)).toEqual(2);
    });

    test('Throws Exception when non string is passed', () => {
        expect(() => {
            addPositiveNumbers(null,1);
        }).toThrow('Parameter was not a number.');
    });
    test('Throws Exception when non string is passed', () => {
        expect(() => {
            addPositiveNumbers(2,0);
        }).toThrow('Parameter was not a number.');
    });

});

describe('latestRollingStoneArticleTitle', () => {



});

