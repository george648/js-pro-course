const products = [
    {
      "name": "Milk",
      "price": 20,
      "quantity": 1,
      "type": 1,
      "id": 1
    },
    {
      "name": "Apple",
      "price": 10,
      "quantity": 3,
      "type": 2,
      "id": 2
    },
    {
      "name": "Butter",
      "price": 12,
      "quantity": 1,
      "type": 1,
      "id": 3
    },
    {
      "name": "Bread",
      "price": 23,
      "quantity": 1,
      "type": 5,
      "id": 4
    },
    {
      "name": "Orange",
      "price": 12,
      "quantity": 3,
      "type": 2,
      "id": 5
    },
    {
      "name": "T-Shirt",
      "price": 200,
      "quantity": 1,
      "type": 4,
      "id": 6
    },
    {
      "name": "Jacket",
      "price": 400,
      "quantity": 1,
      "type": 4,
      "id": 7
    },
    {
      "name": "Tomato",
      "price": 15,
      "quantity": 5,
      "type": 3,
      "id": 8
    },
    {
      "name": "Onion",
      "price": 10,
      "quantity": 4,
      "type": 3,
      "id": 9
    }
];

const sortArrayByPrice = ((array, price) => {
    return array.sort((firtstProduct, secondProduct) => {
        if (firtstProduct[price] > secondProduct[price]) {
            return 1;
        } else if (firtstProduct[price] < secondProduct[price]) {
            return -1;
        }
    })
});

const getArrayByName = ((array, name) => {
    return array
    .filter((product) => product[name])
    .map((product) => product[name])
});

const totalProductsPrice = ((array) => {
    let total = 0;
    array
    .filter((product) => product.price)
    .map((product) => total += product.price)
    return total
});

const filterArrayByType = ((array, type) => {
    return array
    .filter((product) => product.type === type)
});

const deletePropertyInArrayByID = ((array, id) => {
    return array
    .filter((product) => product.id !== id)
});

// const getProductByIdAndQuantity = ((array, id, quantity) => {
//     return array
//     .filter((product) => product.id ===id) 
// }); 

const res = totalProductsPrice(products);

console.log(res);

module.exports = {getArrayByName, totalProductsPrice, filterArrayByType, deletePropertyInArrayByID, sortArrayByPrice};