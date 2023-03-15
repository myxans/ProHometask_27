const array = [
    { car: 'ford Fiesta', price: 2000, year: 2016, },
    { car: 'ford Fiesta', price: 1680, year: 2014 },
    { car: 'ford Fiesta', price: 990, year: 2011 }
];

//mapping
function mapping(array, callback) {
    let newArray = [];
    if (array == null) {
        alert('sorry')
    } else (array.forEach(element => {
        if (Array.isArray(array)) {
            newArray.push(callback(element))
        } else if (typeof array == 'object') {
            newArray.push(callback(element))
        } else {alert('sorry')}
    }));
    return newArray;
}


/*function mapping(array, callback) {
    let newArray = [];
    for (let key of array) {
        if (Array.isArray(array)) {
            newArray.push(callback(key))
        } else if (array == null) {
            alert('sorry')
        } else if (typeof array == 'object') {
            newArray.push(callback(key))
        } else {alert('sorry')}
    }
    return newArray;
}*/

const callback = (item) => item.year;
const callback2 = (item) => item.price > 1000;

console.log(mapping(null, callback));
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