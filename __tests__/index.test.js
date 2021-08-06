import {
    add,
    addListItem,
    commaSeparatedStringToArray,
    addPositiveNumbers,
    latestRollingStoneArticleTitle
} from '../index';

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
    test('Adds a new item to a list', () => {
        let myList = document.createElement('ul');
        addListItem(myList, 'list item');
        //nodeName
        //textContent
        expect(myList.getElementsByTagName('li').length)
            .toEqual(1);
    });
});

describe('commaSeparatedStringToArray', () => {
    test('Check string converted to array', () => {
        expect(commaSeparatedStringToArray('1,2,threeve'))
            .toEqual([
                '1',
                '2',
                'threeve'
            ]);
    });

    // error
});

describe('addPositiveNumbers', () => {
    test('Returns the correct answer', () => {
        expect(addPositiveNumbers(1, 2)).toBe(3);
    });

    test('Throws when non-number passed', () => {
        expect(() => {
            addPositiveNumbers('1', 3);
        }).toThrow('Parameter was not a number.');
    });

    test('Throws when non-postive number passed', () => {
        expect(() => {
            addPositiveNumbers(1, -3);
        }).toThrow('Parameter was not a number.');
    });
});

// @WIP -- not working
describe('latestRollingStoneArticleTitle', () => {
    window.fetch = jest.fn();
    fetch
        .mockResolvedValueOnce({
            status: 200,
            title: "Free Britney Spears",
            json: JSON.stringify
        });

    console.log(latestRollingStoneArticleTitle());

    test('Gets a title from RS', async () => {
        expect(latestRollingStoneArticleTitle())
            .toBe({});
    })
});
