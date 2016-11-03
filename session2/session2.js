/*1. Напишите функцию, которая будет возвращать набор уникальных символов,
 которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
 строчные и заглавные буквы - 1 символ.
 */
function extractCharacters(str) {
    var extractedCharacters = [];
    for (i = 0; i < str.length; i++) {
        var lowerCaseChar = str[i].toLowerCase();
        if (!include(extractedCharacters, lowerCaseChar)) {
            extractedCharacters.push(lowerCaseChar);
        }
    }
    return extractedCharacters;
}

console.log(extractCharacters('abcd')); //["a", "b", "c", "d"]
console.log(extractCharacters('aaaabc')); //["a", "b", "c"]
console.log(extractCharacters('Hello, world')); //["h", "e", "l", "o", ",", " ", "w", "r", "d"]

function include(array, obj) {
    return (array.indexOf(obj) != -1);
}

/* 2. Напишите функцию, которая будет возвращать новую функцию,
 с помощью которой можно будет выводить в консоль текстовую информацию.
 Задача на 5+: сделать так, чтобы кастомный логгер не "ломал" коллстек.
 */
function createLogger(logName) {
    return function () {
        var date = new Date();
        var isoString = date.toISOString();
        var finalString = isoString + ' ' + logName + ': ';
        for (i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string') {
                finalString += ' ' + arguments[i];
            } else if (typeof arguments[i] === 'object') {
                finalString += ' Object ' + JSON.stringify(arguments[i]);
            }
        }
        return finalString;
    };
}
var myLogger = createLogger('My Logger:');
console.log(myLogger('some data')); //2016-10-30T10:24:20.346Z My Logger: some data
console.log(myLogger({data: 1}));
console.log(myLogger('My data is -', {data: 1}));


//Опциональное практическое задание

/*1. Create a function that will take any number of arguments and return their sum.
 2. Make this function be able to take array as argument.
 */
function totalSum() {
    var total = 0;

    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'number') {
            total += arguments[i];
        } else if (Array.isArray((arguments[i]))) {
            for (j = 0; j < arguments[i].length; j++) {
                total += arguments[i][j];
            }
        } else {
            total += 0;
        }
    }
    return total;
}

console.log(totalSum(3, 10)); // 13
console.log(totalSum([3, 10], [4, 6], [10])); // 33
console.log(totalSum([3, 10], 10, [10], 0)); // 33

/*In Browser environment declare a variable:
 var myVar = { key: 'value' };
 Look at
 window.myVar;
 1. Declare a private variable using IIFE.
 2. Is there any other ways how to declare private variables in JavaScript ?
 */
var myVar = {
    key: 'value'
};
console.log(window.myVar); // {key: "value"}

function Private() {
    var myVar = {
        key: 'value'
    };

    this.a = function () {
        console.log(myVar);
    }
}

var obj = new Private();
obj.a(); // {key: "value"}

/*Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
 */
function celsiusToFahrenheit(degree) {
    var c = degree;
    var f = c * 9 / 5 + 32;

    return c + "°C is " + f + "°F";
}

console.log(celsiusToFahrenheit(0)); //0°C is 32°F

/*Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C."
 */
function fahrenheitToCelsius(degree) {
    var f = degree;
    var c = (f - 32) * 5 / 9;

    return f + "°F is " + c + "°C";

}
console.log(fahrenheitToCelsius(32)); //32°F is 0°C

/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 Example string : 'Hello, GlobalLogic!'
 Expected Output : 'GlobalLogic'
 */
function theLongestWord(str) {
    return str.replace(/[^ A-Za-z0-9_]/gmi, '').split(' ').reduce(function (previous, current) {
        return (previous.length > current.length) ? previous : current;
    })
}
console.log(theLongestWord('Hello, GlobalLogic!')); // "GlobalLogic"

/*Write a function that can print entity details based on next model:
 {
 name: String,
 type: String,
 age: Number
 }
 Expected output: "%NAME%(%TYPE%) - %AGE%."
 */
var entityDetails = {
    name: 'James',
    type: 'student',
    age: 21
};

function printDetails(obj) {
    return obj.name + '(' + obj.type + ')' + ' - ' + obj.age + '.';
}
console.log(printDetails(entityDetails)); // "James(student) - 21."

/*Rewrite that function to use this instead of argument
 (use apply, call and bind to print the details of different entities).
 */
function printEntityDetails() {
    return this.name + '(' + this.type + ')' + ' - ' + this.age + '.';
}

console.log(printEntityDetails.call(entityDetails)); // "James(student) - 21."
console.log(printEntityDetails.apply(entityDetails)); // "James(student) - 21."
var showEntityDetails = printEntityDetails.bind(entityDetails);
console.log(showEntityDetails()); // "James(student) - 21."