import {getValuesByProperty} from './../script.js';

describe('getValuesByProperty', () => {

    describe('getValuesByProperty', () => {
        it('Must return new array of properties', () => {
            const array = [
                 {
                     'book': 'Harry potter and the Prisoner of Azkaban',
                     'author': 'J.K. Rowling',
                     'yearOfPublication': 1999
                 },
                 {
                     'book': 'Harry potter and the Goblet of Fire',
                     'author': 'J.K. Rowling',
                     'yearOfPublication': 2000,
                     'movie': 2005
                 },
                 {
                     'book': 'Harry potter and the Prisoner of Azkaban',
                     'author': 'J.K. Rowling',
                     'movie': 2009
                 }
            ];
     
            const result = getValuesByProperty(array, 'movie');
     
            expect(result).toEqual([2005, 2009])
         })
    });

    describe('getValuesByProperty', () => {
        it(`Must return string 'Array cannot be an empty' `, () => {
            const array = [];
            const result = getValuesByProperty(array, 'movie');
            expect(result).toBe('Array cannot be an empty')
         })
    });

    describe('getValuesByProperty', () => {
        it(`Must return string 'There is no such properties' `, () => {
            const array = [
                {
                    'book': 'Harry potter and the Prisoner of Azkaban',
                    'author': 'J.K. Rowling',
                    'yearOfPublication': 1999
                },
                {
                    'book': 'Harry potter and the Goblet of Fire',
                    'author': 'J.K. Rowling',
                    'yearOfPublication': 2000,
                    'movie': 2005
                },
                {
                    'book': 'Harry potter and the Prisoner of Azkaban',
                    'author': 'J.K. Rowling',
                    'movie': 2009
                }
           ];
            const result = getValuesByProperty(array, 'moveie');
            expect(result).toBe('There is no such properties')
         })
    });

   
})