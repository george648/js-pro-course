const bookArray = [
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
    },
];

const arr = [];

function getValuesByProperty(array, property) {
    if (array.length === 0) {
        return 'Array cannot be an empty'
    };
    const result = [];
    array.map(element => {
        if(element[property]) {
            result.push(element[property]);
        }
    })
    return result || 'There is no such properties'
};

// const res = getValuesByProperty(bookArray, 'yearOfPublication');
// console.log(res);
const res = getValuesByProperty(bookArray, 'moedavie');
console.log(res);
