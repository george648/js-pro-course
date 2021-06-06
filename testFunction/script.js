// "test": "echo \"Error: no test specified\" && exit 1",

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
    const result = [];
    const string = 'There is no such properties';
    array.map(element => {
        if(element[property]) {
            result.push(element[property]);
        } else {
            return 
        }
    });

    if (!array.length) {
        return 'Array cannot be an empty'
    } else {
        return result 
    }
};

const res = getValuesByProperty(bookArray, 'movie');
console.log(res);

module.exports = {bookArray, getValuesByProperty};
// export {bookArray};
// export {bookArgetValuesByPropertyray};