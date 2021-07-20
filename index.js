import { isPositiveNumber } from "./isPositiveNumber";

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
 * Comma-separated string converts to array.
 *
 * @param {string} text comma-separated string
 * @returns {array}
 * @throws {Error}
 */
export function commaSeparatedStringToArray(text) {
    if (typeof text !== 'string') {
        throw new Error('Parameter was not a string.');
    }

    return text.split(',');
}

/**
 * Add two positive numbers together.
 *
 * @param {number} first
 * @param {number} second
 * @returns {number}
 * @throws {Error}
 */
export function addPositiveNumbers(first, second) {
    if (isPositiveNumber(first) || isPositiveNumber(second)) {
        throw new Error('Parameter was not a number.');
    }

    return first + second;
}

/**
 * Get the title of the latest artciel on Rolling Stone.
 *
 * @returns {string}
 */
export function latestRollingStoneArticleTitle() {
    fetch('https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=1')
    .then(
        function(response) {
            if (response.status !== 200) {
                throw new Error('Status code is not 200, it is ' + response.status);
            }

            response.json().then(function(data) {
                return data[0]['title']['rendered'];
            });
        }
    )
}