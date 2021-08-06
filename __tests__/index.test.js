import { add } from '../index';
import { addPositiveNumbers } from '../index';
import { addListItem} from '../index';
import { commaSeparatedStringToArray } from '../index';
import * as IsPositiveNumber from "../isPositiveNumber";
import { latestRollingStoneArticleTitle } from '../index';

IsPositiveNumber.isPositiveNumber = jest.fn();

describe('add', () => {
    test('Returns the correct answer', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            add('1', 3);
        }).toThrow('Parameter was not a number.');
    });

    test('Adding large numbers together works as expected', () => {
        const largeNumber = 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678;
        const largeNumbersAddedTogether = 2.4691357802469135e+307;
        expect(add(largeNumber, largeNumber)).toBe(largeNumbersAddedTogether);
    });

    test('Adding numbers together that go past MAX_VALUE result in Infinity being the solution', () => {
        const largeNumber = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789;
        expect(add(largeNumber, largeNumber)).toBe(Infinity);
    });

    test('Adding Infinity to another number equals Infinity', () => {
        expect(add(Infinity, 12345)).toBe(Infinity);
    });

    test('Adding Infinity to a negitive number number equals Infinity', () => {
        expect(add(Infinity, -12345)).toBe(Infinity);
    });

    test('Adding Infinity to Infinity is still Infinity', () => {
        expect(add(Infinity, Infinity)).toBe(Infinity);
    });

    test('Adding Infinity to negative Infinity is still Infinity', () => {
        expect(add(Infinity, -Infinity)).toBe(NaN);
    });

    test('Adding a negative number to a positive number works as expected', () => {
        expect(add(-1, 1)).toBe(0);
        expect(add(1, -1)).toBe(0);
        expect(add(10, -5)).toBe(5);
        expect(add(-45, 50)).toBe(5);
    });
});

describe('addListItem', () => {
    beforeAll(() => {
        document.body.innerHTML = '<ul id="unittest"></ul>';
        const $el = document.getElementById('unittest')

        addListItem($el, 'First');
        addListItem($el, 'Second');
        addListItem($el, 'Third');
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    test('Number of items is 3', () => {
        const count = document.getElementById('unittest').getElementsByTagName('li').length;
        expect(count).toBe(3);
    });

    test('First element has text First', () => {
        const text = document.getElementById('unittest').getElementsByTagName('li')[0].textContent;
        expect(text).toBe('First');
    });

    test('Second element has text Second', () => {
        const text = document.getElementById('unittest').getElementsByTagName('li')[1].textContent;
        expect(text).toBe('Second');
    });

    test('Third element has text Third', () => {
        const text = document.getElementById('unittest').getElementsByTagName('li')[2].textContent;
        expect(text).toBe('Third');
    });

    test('Ading in another item results in ', () => {
        const $el = document.getElementById('unittest')
        addListItem($el, 'another one');

        const count = $el.getElementsByTagName('li').length;
        const text  = $el.getElementsByTagName('li')[3].textContent;
        expect(count).toBe(4);
        expect(text).toBe('another one');
    });
});

describe('commaSeparatedStringToArray', () => {
    test('Returns array from comma separated string', () => {
        expect(commaSeparatedStringToArray('my,unit,test')).toStrictEqual(['my','unit','test']);
    });

    test('Adding in extra commas returns empty array values', () => {
        expect(commaSeparatedStringToArray(',my,unit,,test,,,,')).toStrictEqual(['','my','unit','','test','','','','']);
    });

    test('A string with no commas returns an array with a single empty string in it', () => {
        expect(commaSeparatedStringToArray('')).toStrictEqual(['']);
    });

    test('A string with just commas in it still works as expected', () => {
        expect(commaSeparatedStringToArray(',,')).toStrictEqual(['','','']);
    });

    test('Adding in spaces and special characters works as expected', () => {
        expect(commaSeparatedStringToArray('Here, are a bunch of special characters: #$%^&*,12345     ')).toStrictEqual(['Here',' are a bunch of special characters: #$%^&*','12345     ']);
    });

    test('Throws when non-string passed', () => {
        expect(() => {
            commaSeparatedStringToArray(5);
        }).toThrow('Parameter was not a string.');
    });
});

describe('addPositiveNumbers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Returns the correct answer', () => {
        IsPositiveNumber.isPositiveNumber.mockReturnValueOnce(true).mockReturnValueOnce(true);
        expect(addPositiveNumbers(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        IsPositiveNumber.isPositiveNumber.mockReturnValueOnce(false).mockReturnValueOnce(true);
        expect(() => {
            addPositiveNumbers('1', 3);
        }).toThrow('Parameter was not a number.');
    });

    test('Adding large numbers together works as expected', () => {
        const largeNumber = 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678;
        const largeNumbersAddedTogether = 2.4691357802469135e+307;
        expect(add(largeNumber, largeNumber)).toBe(largeNumbersAddedTogether);
    });

    test('Adding numbers together that go past MAX_VALUE result in Infinity being the solution', () => {
        const largeNumber = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789;
        expect(add(largeNumber, largeNumber)).toBe(Infinity);
    });

    test('Adding Infinity to another number equals Infinity', () => {
        expect(add(Infinity, 12345)).toBe(Infinity);
    });

    test('Adding Infinity to a negitive number to Throw error', () => {
        expect(() => {
            addPositiveNumbers(Infinity, -12345);
        }).toThrow('Parameter was not a number.');
    });

    test('Adding Infinity to Infinity is still Infinity', () => {
        expect(add(Infinity, Infinity)).toBe(Infinity);
    });

    test('Adding Infinity to negative Infinity is still Infinity', () => {
        expect(() => {
            addPositiveNumbers(Infinity, -Infinity);
        }).toThrow('Parameter was not a number.');
    });

    test('Expect isPositiveNumber to have been called twice', () => {
        IsPositiveNumber.isPositiveNumber.mockReturnValueOnce(true).mockReturnValueOnce(true);
        expect(addPositiveNumbers(1, 2)).toBe(3);
        expect(IsPositiveNumber.isPositiveNumber).toHaveBeenCalled();
        expect(IsPositiveNumber.isPositiveNumber).toHaveBeenCalledTimes(2);
        expect(IsPositiveNumber.isPositiveNumber).toHaveBeenCalledWith(1);
        expect(IsPositiveNumber.isPositiveNumber).toHaveBeenCalledWith(2);
    });
});

describe('latestRollingStoneArticleTitle', () => {
    let savedFetch;
    const jsonPromise = jest.fn().mockResolvedValue([
        {
            title: {
                rendered: 'The Title'
            }
        }
    ]);

    beforeAll(() => {
        savedFetch = global.fetch;
        global.fetch = jest.fn().mockResolvedValue({
            status: 200,
            json: jsonPromise
        });
    });

    afterAll(() => {
        global.fetch = savedFetch;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Successful fetch call and response', async () => {
        const result = await latestRollingStoneArticleTitle();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=1');
        expect(jsonPromise).toHaveBeenCalledTimes(1);
        expect(result).toBe('The Title');
    });

    test('Rejects on non-200 response', async () => {
        global.fetch.mockResolvedValueOnce({
            status: 500,
            json: jsonPromise
        });

        await expect(latestRollingStoneArticleTitle()).rejects.toEqual(new Error('Status code is not 200, it is 500'));

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=1');
        expect(jsonPromise).not.toHaveBeenCalled();
    });

    test('Rejects on badly formatted data', async () => {
        jsonPromise.mockResolvedValueOnce('Bad data');

        await expect(latestRollingStoneArticleTitle()).rejects.toEqual(expect.any(Error));

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=1');
        expect(jsonPromise).toHaveBeenCalledTimes(1);
    });
});