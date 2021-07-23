import {
    add,
    addListItem,
    commaSeparatedStringToArray,
    addPositiveNumbers,
    latestRollingStoneArticleTitle
} from '../index';
import fetchMock from 'fetch-mock-jest';

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

describe('addListItem', () => {
    test('Add a new item to a list', () => {
        const $ul = document.createElement('ul');
        addListItem($ul, 'test');
        expect($ul.innerHTML).toBe('<li>test</li>');
    });
});

describe('commaSeparatedStringToArray', () => {
    test('Comma-separated string converts to array', () => {
        const arr = commaSeparatedStringToArray('a,b,c');
        expect(Array.isArray(arr)).toBeTruthy();
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test('Throws when non-string passed', () => {
        expect(() => {
            commaSeparatedStringToArray(1);
        }).toThrow('Parameter was not a string.');
    });

});

describe('addPositiveNumbers', () => {
    test('Returns the correct answer', () => {
        expect(addPositiveNumbers(1, 2)).toBe(3);
    });

    test('Throws when non-positive number passed', () => {
        expect(() => {
            addPositiveNumbers('1', 3);
        }).toThrow('Parameter was not a positive number.');
    });
});

describe('latestRollingStoneArticleTitle', () => {
    const url = 'https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=1';

    beforeEach(() => {
        fetchMock.mockReset();
    });

    test('Get the title of the latest article on Rolling Stone.', async () => {
        const title = 'title';
        fetchMock.get(url, [{ title: { rendered: title } }]);
        const response = await latestRollingStoneArticleTitle();
        expect(response).toBe(title);
    });

    test('Throws error for non-200s status', async () => {
        fetchMock.get(url, () => 404);

        const response = await latestRollingStoneArticleTitle()
            .catch(e => e.toString());

        expect(response).toEqual('Error: Status code is not 200, it is 404');
    });
});