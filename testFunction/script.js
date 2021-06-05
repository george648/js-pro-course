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
    // const res = property;
    if (array.length === 0) {
        return 'Array cannot be an empty'
    };

    return array.find(element => {
        console.log(element.property);
    })
    
};

getValuesByProperty(bookArray, 'yearOfPublication')