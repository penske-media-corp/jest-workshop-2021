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

export function addListItem($el, text) {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(text));
    $el.appendChild(li);
}

export function isPositive(number) {
    if (typeof first !== 'number') {
        throw new Error('Parameter was not a number.'); 
    }
    
    if (0 < number) {
        return true;
    }

    return false;
}