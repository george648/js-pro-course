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
        'movie': 2009
    },
];

function getValuesByProperty(array, property) {
    if (!array.length) {
        return DEFAULT_STRING_IF_ARRAY_IS_EMPTY
    };

    const hasItem = array.some((item)=> item[property]);
    
    if(!hasItem) {
        return DEFAULT_STRING_IF_NOT_FOUND_PROPERTY
    };

    const masthesObject = array
    .filter((item) => item[property])
    .map((item) => item[property]);
 
    return masthesObject
};

const res = getValuesByProperty(bookArray, 'movise');
console.log(res);

module.exports = {bookArray, getValuesByProperty};