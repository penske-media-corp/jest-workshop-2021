import { add, addListItem } from '../index';

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

    afterAll(() => {
        document.body.innerHTML = '';
    });

    beforeAll(() => {
        const $ul = document.createElement('ul');
        $ul.setAttribute('id', 'list');
        document.body.appendChild($ul);

        for (let i = 0; i < 5; i++) {
            addListItem($ul, 'li count - '. i);
        }

    });

    test('Total lists are 5', () => {
        const li_count = document.getElementById("list").childElementCount;
        expect(li_count).toBe(5);
    });

    test('Print list inner text', () => {
        const li_nodes = document.getElementById("list").childNodes;
        for( let j = 0; j < 5; j++ ){
            expect( li_nodes.innerText ).toBe( 'li count - ' . j );
        }
    });


});
