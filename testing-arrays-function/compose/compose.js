const composeFunction = function (...funcs) {
    return function(args) {   
        let res;
        for(let i = 0; i < funcs.length; i ++) {
            res = funcs[i](args);
        }
    } 
};

// function compose(n) {
//     n(x)
//     return function(x) {
//         return x + n
//     }
// };

// compose(2)(2)