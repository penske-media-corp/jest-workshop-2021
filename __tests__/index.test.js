import { add, addListItem, addPositiveNumbers, commaSeparatedStringToArray } from '../index';

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

describe('comma separated string to array', () => {
    test('Returns the correct answer', () => {
        expect(commaSeparatedStringToArray('test1,test2')).toEqual(['test1', 'test2']);
    });

    test('Throws when non-string is passed', () => {
        expect(() => {
            commaSeparatedStringToArray(1);
        }).toThrow('Parameter was not a string.');
    });    
});

describe('add positive numbers', () => {
    test('Returns the correct answer', () => {
        expect(addPositiveNumbers(1, 2)).toBe(3);
    });

    test('Throws when negative number passed', () => {
        expect(() => {
            addPositiveNumbers(-1, 3);
        }).toThrow('Parameter was not a number.');
    });
});
