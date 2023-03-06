const array = [
    { car: 'ford Fiesta', price: 2000, year: 2016, },
    { car: 'ford Fiesta', price: 1680, year: 2014 },
    { car: 'ford Fiesta', price: 990, year: 2011 }
];

//mapping
function mapping(array, callback) {
    let newArray = [];
    for (let key of array) {
        if (typeof array == 'object') {
            newArray.push(callback(key))
        } else {alert('sorry')}
    }
    return newArray;
}

const callback = (item) => item.price;
const callback2 = (item) => item.price > 1000;

console.log(mapping(array, callback));
console.log(mapping(array, callback2));
console.log(array);

//filter
function filter(array, callback) {
    let right = []; 
    let wrong = [];
    for (let key of array) {
        if (callback(key) == true) {
            right.push(callback(key))
        } if (callback(key) == false) {
            wrong.push(callback(key))
        }
    }
    return {
        wrongTest: wrong,
        rightTest: right
    }
}

const callback3 = (item) => item.price > 1500;

console.log(filter(array, callback3));