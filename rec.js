const List = require('immutable').List;

function rawSum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

function memoize(fn) {
    let prevArg;
    let prevResult;
    return function(arg) {
        return arg === prevArg ?
            prevResult :
            (prevArg = arg,
                prevResult = fn.call(this, arg));
    };
}

function createBigArray() {
    let a = [];
    for (let i = 0; i <= 999999; i++) {
        a[i] = i + 1;
    }

    return a;
}


function createImmutableBigArray() {
   return List( createBigArray() );
}

//let array = createBigArray();
let array = createImmutableBigArray();

let sum = memoize(rawSum);
let result;

console.log('- #1 -');
console.time('sum');
result = sum(array);
console.log(result);
console.timeEnd('sum');


console.log('- #2 -');
console.time('sum');
result = sum(array);
result = sum(array);
console.log(result);
console.timeEnd('sum');

//array.push(1001);
array = array.push(1001);

console.log('- #3 after adding 1001 -');
console.time('sum');
result = sum(array);
result = sum(array);
console.log(result);
console.timeEnd('sum');
