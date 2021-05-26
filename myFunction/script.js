// function arrayFind(element) {
//     return element === 5 
// };

// function findValue(array, callBack) {
//     for (let i = 0; i < array.length; i++) {
//         const res = callBack(array[i]);
//         if (res) {
//             return array[i]
//         }
//     }
// };

// console.log(findValue([1, 2, 4, 5, 6, 7], arrayFind));


function arrayFilter(element) {
    return element * 5 
};

function arrayMethodFilter(array, callBack, thisArg) {
    for (let i = 0; i < array.length; i++) {
        let newArray = [];
        newArray.push(callBack.call(array[i]))
    }
};

console.log(arrayMethodFilter([3, 2, 4, 5, 6, 7], arrayFilter));
