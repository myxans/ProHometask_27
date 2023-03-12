const array = [
    { car: 'ford Fiesta', price: 2000, year: 2016, },
    { car: 'ford Fiesta', price: 1680, year: 2014 },
    { car: 'ford Fiesta', price: 990, year: 2011 }
];

//mapping
function mapping(array, callback) {
    let newArray = [];
    for (let key of array) {
        switch (true) {
            case Array.isArray(array):
                newArray.push(callback(key));
                break;
            case typeof array == 'object':
                newArray.push(callback(key));
                break;
            default:
                console.log('sorry')
        }
    }
    return newArray;
}

const callback = (item) => item;
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
            right.push(key)
        } if (callback(key) == false) {
            wrong.push(key)
        }
    }
    return {
        wrongTest: wrong,
        rightTest: right
    }
}

const callback3 = (item) => item.price > 1500;

console.log(filter(array, callback3));