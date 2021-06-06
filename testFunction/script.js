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

function getValuesByProperty(array, property) {
    if (array.length === 0) {
        return 'Array cannot be an empty'
    };
    const result = [];

    return array.map(element => {
        if(element[property]) {
            const res = element[property];
            result.push(res);
            console.log(result)
            return result
        }
    })
};

getValuesByProperty(bookArray, 'movie');