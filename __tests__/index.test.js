import { add, addListItem, commaSeparatedStringToArray, addPositiveNumbers } from '../index';

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

describe( 'addListItem', () => {

	afterAll( () => {
		document.body.innerHTML = '';
	} );

	beforeAll( () => {

		const $list = document.createElement( 'ol' );

		$list.setAttribute( 'id', 'test-list' );
		document.body.appendChild( $list );

		addListItem( $list, 'List item - 1' );

	} );

	test( 'test list item has text node', () => {
		const listItemText = document.getElementById( 'test-list' ).childNodes[0].innerHTML;

		expect( listItemText ).toBe( 'List item - 1' );
	} );

});

describe( 'commaSeparatedStringToArray', () => {

	test( 'Throws error when string is not passed', () => {

		expect( () => {
			commaSeparatedStringToArray( 3 );
		} ).toThrow( 'Parameter was not a string.' );

	} );

	test( 'Returns the correct answer', () => {
		expect( commaSeparatedStringToArray( 'mclaren,gulfstream' ) ).toEqual( [ 'mclaren', 'gulfstream' ] );
	} );

} );

describe( 'addPositiveNumbers', () => {

	test( 'Throws error when 0 is passed', () => {

		expect( () => {
			addPositiveNumbers( 0, 1 );
		} ).toThrow( 'Parameter was not a number.' );

	} );

	test( 'Throws error when a negative number is passed', () => {

		expect( () => {
			addPositiveNumbers( 2, -3 );
		} ).toThrow( 'Parameter was not a number.' );

	} );

	test( 'Throws error when a string is passed', () => {

		expect( () => {
			addPositiveNumbers( 2, 'hello' );
		} ).toThrow( 'Parameter was not a number.' );

	} );

	test( 'Returns the correct answer', () => {
		expect( addPositiveNumbers( 2, 3 ) ).toBe( 5 );
	} );

} );
