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
                if (
                    'object' !== typeof(data) ||
                    'object' !== typeof(data[0]) ||
                    'object' !== typeof(data[0]['title']) ||
                    'string' !== typeof(data[0]['title']['rendered'])
                ) {
                    throw new Error('JSON structure is not as expected.');
                }

                return data[0]['title']['rendered'];
            });
        }
    )
    .catch(function(err) {
        throw new Error('Fetch error: ' + err);
    });
}