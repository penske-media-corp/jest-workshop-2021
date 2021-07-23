/**
 * Is a number positive.
 *
 * @param {number} number
 * @returns {boolean}
 */
export function isPositiveNumber(number) {
    // Simplify this function so that it purely returns boolean
    return typeof number === 'number' && 0 < number;
}