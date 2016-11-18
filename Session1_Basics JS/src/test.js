/*
 Напишите функцию, которая принимает 1 аргумент и возварщает его тип
 */
function getDataType(variable) {
    return typeof variable;
}

/*
 Напишите функцию, которая принимает 1 аргумент и возвращает:
 'primitive' если тип данных относится к примивным
 'primitive-special' если тип данных специальный
 'object' - если простой обьект
 'object-array' - если массив
 'object-function' - если функция
 */
function getDataTypePseudoName(variable) {
    switch (typeof variable) {
        case 'boolean':
        case 'number':
        case 'string':
            return 'primitive';
            break;
        case 'undefined':
            return 'primitive-special';
            break;
        case 'object':
            if (variable === null) {
                return 'primitive-special';
            } else if (Array.isArray(variable)) {
                return 'object-array';
            } else {
                return 'object';
            }
            break;
        case 'function':
            return 'object-function';
            break;
    }
}

/*
 Напишите функцию, которая принимает 2 аргумента,
 и возврвщает 1 если их значения и их типы равны,
 0 если равны только значения
 и -1 в другом случае
 */
function compareByType(a, b) {
    if (a === b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else {
        return -1;
    }
}


// Numbers

/*
 Напишите функцию, которая принимает 1 аргумент,
 и в случае если аргумент имеет числовой тип увеличивает его на 1
 и возврвщвет результат,
 в любом другом случае возврвщвет -1
 */
function increase(value) {
    if (typeof value === 'number') {
        return value += 1;
    } else {
        return -1;
    }
}

/*
 Напишите функцию, которая принимает 1 аргумент(число),
 и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
 */
function testForSafeNumber(value) {
    if (isFinite(value) && typeof value === 'number') {
        return 'safe';
    } else {
        return 'danger';
    }
}


// Strings

/*
 Напишите функцию, которая принимает 1 аргумент (строку),
 и возвращает массив из елементов строки разделенных по пробелу ' '
 */
function stringToArray(str) {
    return str.split(' ');
}


/*
 Напишите функцию, которая принимает 1 аргумент (строку),
 и возвращает часть этой строки до первой запятой
 */
function getStringPart(str) {
    return str.substring(0, str.indexOf(','));
}

/*
 Напишите функцию, которая принимает 2 аргумента (строку и симовл),
 и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
 false в противоположном случае
 */
function isSingleSymbolMatch(str, symbol) {
    if ((str.split(symbol).length - 1) == 1) {
        return str.indexOf(symbol);
    } else {
        return false;
    }
}

/*
 Напишите функцию, которая принимает 2 аргумента,
 массив в разделитель[опционально],
 и возвращает строку ввиде элементов массива c разделителями если разделитель задан
 или строку разделенную "-" если не задан
 */
function join(array, separator) {
    return separator ? array.join(separator) : array.join('-');
}


/*
 Напишите функцию, которая принимает 2 массива,
 и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
 */
function glue(arrA, arrB) {
    var newArray = arrA.concat(arrB);
    return newArray;
}

/*
 Напишите функцию, которая принимает 1 массив,
 и возвращает другой массив отсортированный от большего к меньшему
 */
function order(arr) {
    return arr.sort(function (a, b) {
        if (a === b) {
            return 0;
        } else if (a <= b) {
            return 1;
        } else {
            return -1;
        }
    });
}


/*
 Напишите функцию, которая принимает 1 массив,
 и возвращает другой без чисел которые меньше 0
 */
function removeNegative(arr) {
    return arr.filter(function (newArr) {
        return newArr > 0;
    });
}

/*
 Напишите функцию, которая принимает 2 числовых массива,
 и возвращает новый массив, состоящий из элементов первого но без элементов
 которые присутствуют во втром
 [1,2,3], [1, 3] => [2]
 */
function without(arrA, arrB) {
    var differenceArray = [];
    for (var i = 0; i < arrA.length; i++) {
        if (!(include(arrB, arrA[i])) && !(include(differenceArray, arrA[i]))) {
            (differenceArray.push(arrA[i]));
        }
    }
    return differenceArray;
}

function include(array, obj) {
    return (array.indexOf(obj) != -1);
}
