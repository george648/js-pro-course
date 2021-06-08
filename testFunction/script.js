const { isUndefined } = require("util");

const DEFAULT_STRING_IF_NOT_FOUND_PROPERTY = 'There is no such properties';
const DEFAULT_STRING_IF_ARRAY_IS_EMPTY  = 'Array cannot be an empty';

const bookArray = [
    {
        'book': 'Harry potter and the Prisoner of Azkaban',
        'author': 'J.K. Rowling',
        'yearOfPublication': 1999,
        'movie': undefined

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
        'movie': null
    },
];

function getValuesByProperty(array, property) {
    const result = [];

    const hasProperty = array.filter((prop) => {
        if(prop[property]) {
            result.push(prop[property]);
        }
        return prop[property]
    });

    if (!array.length) {
        return DEFAULT_STRING_IF_ARRAY_IS_EMPTY
    } else if(!hasProperty) {
        return DEFAULT_STRING_IF_NOT_FOUND_PROPERTY
    } else {
        return result
    }
};

const res = getValuesByProperty(bookArray, 'movie');
console.log(res);

module.exports = {bookArray, getValuesByProperty};