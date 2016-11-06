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

/*Создайте один объект с помощью литерала,
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

/*Вызовите написанную функцию и передайте два созданных объекта
 и свойство для сравнения
 */
console.log(compareObjects(firstObject, secondObject, 'name'));


//Поиск любимой песни
/*Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
 played - количество раз песня была проиграна (определить случайным образом),
 name - имя песни
 */
var collectionOfSongs = [
    {
        played: Math.round(Math.random() * 20),
        name: 'Coldplay - Adventure of a Lifetime'
    },
    {
        played: Math.round(Math.random() * 20),
        name: 'Moby – Flower'
    },
    {
        played: Math.round(Math.random() * 20),
        name: 'Duke Dumont – Ocean Drive'
    },
    {
        played: Math.round(Math.random() * 20),
        name: 'Daft Punk – One more time'
    },
    {
        played: Math.round(Math.random() * 20),
        name: 'George Ezra – Budapest'
    }
];
/*Напишите функцию favoriteSong, которая принимает коллекцию из песен,
 и возвращает следующую информацию: название песни, сколько раз песня была проиграна, индекс песни в коллекции.
 Вызовите функцию favoriteSong и передайте ей созданную коллекцию
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

