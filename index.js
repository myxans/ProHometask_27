const array = [
    { car: 'ford Fiesta', price: 2000, year: 2016, },
    { car: 'ford Fiesta', price: 1680, year: 2014 },
    { car: 'ford Fiesta', price: 990, year: 2011 }
];

//mapping
function mapping (array, callback) {
    if ((typeof array === 'object' && array !== null) && !Array.isArray(array)) {
        const resObj = {};
        for (let key in objectArray) {
            Object.assign(resObj,callback(array[key], key, array));
        }
        return resObj;
    } else if (Array.isArray(array)) {
        const resArr = [];
        for (let i = 0; i < array.length; i++) {
            resArr.push(callback(array[i], i, array));
        }
        return resArr;
    }  else {
        return alert('Sorry');
    }

}

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