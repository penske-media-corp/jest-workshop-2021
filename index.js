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

/**
 * Add a new item to a list.
 *
 * @param {HTMLOListElement|HTMLUListElement} $el Unordered or order list element
 * @param {string} text Text to add to list item
 */
export function addListItem($el, text) {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(text));
    $el.appendChild(li);
}

/**
 * Is a number positive.
 *
 * @param {number} number
 * @returns {boolean}
 */
export function isPositive(number) {
    if (typeof number !== 'number') {
        throw new Error('Parameter was not a number.'); 
    }

    if (0 < number) {
        return true;
    }

    return false;
}
