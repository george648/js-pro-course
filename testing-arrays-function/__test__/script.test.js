import {getArrayByName, totalProductsPrice, filterArrayByType, sortArrayByPrice, deletePropertyInArrayByID} from './../script.js';

describe('getArrayByName()', () => {
    it('should return array sorting by name', () => {

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
      ]        

      const result = getArrayByName(products, 'name')

        expect(result).toEqual(['Milk','Apple', 'Butter', 'Bread', 'Orange', 'T-Shirt', 'Jacket', 'Tomato', 'Onion']);
    })
});

describe('totalProductsPrice()', () => {
    it('should return total price of products', () => {
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
      
      const result = totalProductsPrice(products)

      expect(result).toBe(702);
    })
});