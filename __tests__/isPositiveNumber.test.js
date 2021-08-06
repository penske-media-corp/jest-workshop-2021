import { isPositiveNumber } from "../isPositiveNumber";

test('Returns true on positive', () => {
    expect(isPositiveNumber(5)).toBe(true);
});
test('Returns false on negative', () => {
    expect(isPositiveNumber(-3)).toBe(false);
});
test('Returns false on 0', () => {
    expect(isPositiveNumber(0)).toBe(false);
});

test('Throws when non-number passed', () => {
    expect(() => {
        isPositiveNumber('threeve');
    }).toThrow('Parameter was not a number.');
});
