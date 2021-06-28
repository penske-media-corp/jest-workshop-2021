import { add } from '../index';

describe('add', () => {
    test('returns the correct answer', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('throws when non-number past', () => {
        expect(() => {
            add('1', 3);
        }).toThrow('Parameter was not a number.');
    });
});
