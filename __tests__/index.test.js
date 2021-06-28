import { add } from '../index';

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
