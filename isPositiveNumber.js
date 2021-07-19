/**
 * Is a number positive.
 *
 * @param {number} number
 * @returns {boolean}
 */
 export function isPositiveNumber(number) {
    if (typeof number !== 'number') {
        throw new Error('Parameter was not a number.'); 
    }

    if (0 < number) {
        return true;
    }

    return false;
}