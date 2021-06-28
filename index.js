/**
 * Add two numbers.
 * 
 * @param {number} first 
 * @param {number} second 
 * @returns {number}
 * @throws {Error}
 */
export function add(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Parameter was not a number.');
    }

    return first + second;
}