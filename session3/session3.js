//Сравнение объектов по свойству
/*1. Напишите функцию compareObjects, которая принимает 2 объекта
 и название числового свойства, по которому нужно выполнить сравнение объектов,
 и выводит в консоль свойство name того объекта,
 у которого значение переданного свойства больше.
 */
var firstObject = {
    name: 'Inna',
    age: 20
};
var secondObject = {
    name: 'Jennifer',
    age: 26
};
function compareObjects(firstObject, secondObject, compare) {
    if (firstObject[compare] > firstObject[compare]) {
        return firstObject[compare];
    } else {
        return secondObject[compare];
    }
}
console.log(compareObjects(firstObject, secondObject, 'age'));

/*2. Создайте один объект с помощью литерала,
 второй через конструктор.
 */
var objectLiteral = {
    name: "Anna",
    age: 20
};

function ObjectConstructor(name, last_name, age) {
    this.name = name
    this.last_name = last_name;
    this.age = age;
}

var ObjectConstructor = new ObjectConstructor('Barbara', 'Ellison', 30);
console.log(ObjectConstructor);

/*3. Вызовите написанную функцию и передайте два созданных объекта
 и свойство для сравнения
 */
console.log(compareObjects(firstObject, secondObject, 'name'));


//Поиск любимой песни
/*1. Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
 played - количество раз песня была проиграна (определить случайным образом),
 name - имя песни
 */
var collectionOfSongs = [
    {
        played: 7,
        name: 'Coldplay - Adventure of a Lifetime'
    },
    {
        played: 4,
        name: 'Moby – Flower'
    },
    {
        played: 2,
        name: 'Duke Dumont – Ocean Drive'
    },
    {
        played: 3,
        name: 'Daft Punk – One more time'
    },
    {
        played: 6,
        name: 'George Ezra – Budapest'
    }
];
/*2. Напишите функцию favoriteSong, которая принимает коллекцию из песен,
 и возвращает следующую информацию: название песни, сколько раз песня была проиграна, индекс песни в коллекции.
 3. Вызовите функцию favoriteSong и передайте ей созданную коллекцию
 */
function favoriteSong(collectionOfSongs) {
    var getSong = collectionOfSongs.reduce(function (previousValue, currentValue) {
        if (previousValue.played > currentValue.played) {
            return previousValue;
        }
        else {
            return currentValue;
        }
    });
    console.log('Name of song: ' + getSong.name + ', Times played: ' + getSong.played + ' Song index: ' + collectionOfSongs.indexOf(getSong));
};
favoriteSong(collectionOfSongs);

//Класс калькулятор
/*1. Опишите конструктор объектов (класс) Calculator с двумя методами:
 add - принимает число и прибавляет его к предыдущему,
 getCurrentSum - принимает индекс и возвращает результирующее число на шаге указанном в индексе
 (если индекса нет, возвращает текущую сумму)
 */
function Calculator() {
    var sums = [];

    for (var i = 0; i < arguments.length; i++) {

        if (isValidNumber(arguments[i])) {
            updateSums(arguments[i]);
        } else {
            console.log(arguments[i] + " is not a valid number!");
        }
    }

    this.add = function (num) {
        if (isValidNumber(num)) {
            updateSums(num);
            return sums[sums.length - 1];
        } else {
            console.log('Please input a valid number!');
        }
    };

    this.getCurrentSum = function (num) {
        if (sums.length == 0) {
            return 0;
        } else if (num === undefined) {
            return sums[sums.length - 1];
        }

        var index = num - 1;

        if (index < 0 || index >= sums.length) {
            console.log("Please input a valid index!");
        } else {
            return sums[index];
        }
    };

    function updateSums(num) {
        sums.push(sums.length == 0 ? num : (num + sums[sums.length - 1]));
    }

    function isValidNumber(num) {
        var isNumber = (typeof num === 'number') && !isNaN(num);
        return isNumber && isFinite(num);
    }
}
//2. Создайте два экземпляра класса Calculator
//3. Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
var calculator1 = new Calculator(3, 8);
var calculator2 = new Calculator(5, 12);
calculator1.add(11);
calculator2.add(17);
//4. Выведите в консоль сумму:
//всех чисел всех объектов, убедитесь (56)
console.log(calculator1.getCurrentSum() + calculator2.getCurrentSum());
//сумму чисел всех объектов на втором шаге (28)
console.log(calculator1.getCurrentSum(2) + calculator2.getCurrentSum(2));
//для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
console.log(calculator1.getCurrentSum(3) === calculator1.getCurrentSum());


// Deep Copy
function shallowCopy() {
    var array1 = [1, 2, 3];
    var array2 = array1;
}

function deepCopy(objectToCopy) {
    /*
     *  Conceptual Difference Between Shallow Copy and Deep Copy
     *
     *   SHALLOW COPY
     var array1 = [1, 2 , 3];
     var array2 = array1;
     *
     *
     *  DEEP COPY
     var array1 = [1, 2 , 3];
     var array2 = [];
     * for (var i = 0; i < array1.length; i++) {
     array2.push(array1[i]);
     }
     * */
    // efficient and fast JavaScript deep copy
    return JSON.parse(JSON.stringify(objectToCopy));
}

var objectToClone = [
    {
        name: 'Inna',
        age: 20
    },
    {
        name: 'Anna',
        age: 26
    },
    {
        name: 'Helen',
        age: 32
    }];
function deepCopyObject(objectToClone) {
    var clone = {};
    for (var i = 0; i < objectToClone.length; i++) {
        var isObject = objectToClone[i] != null && typeof(objectToClone[i]) == "object";
        clone[i] = isObject ? deepCopyObject(objectToClone[i]) : objectToClone[i];
    }
    return clone;
}
console.log(deepCopyObject(objectToClone));