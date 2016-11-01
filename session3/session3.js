/*Напишите функцию compareObjects, которая принимает 2 объекта
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

