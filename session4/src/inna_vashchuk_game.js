var heroClasses = {
    warrior: {
        charClass: "Warrior",
        life: 30,
        damage: 4
    },
    rogue: {
        charClass: "Rogue",
        life: 25,
        damage: 3
    },
    sorcerer: {
        charClass: "Sorcerer",
        life: 20,
        damage: 5
    }
};

var monsterClasses = {
    zombie: {
        charClass: "Zombie",
        life: 8,
        damage: 4
    },
    skeleton: {
        charClass: "Skeleton",
        life: 10,
        damage: 6
    },
    holem: {
        charClass: "Holem",
        life: 15,
        damage: 6
    }
};

var statuses = {
    idle      : "Idle",
    progress  : "In progress",
    finished  : "Finished"
};

var maxMonsters = 2;

var Hero = function (name, heroClass) {
    this.name = name;
    this.charClass = heroClass;
    this.life = 100;
    this.damage;
};

var Monster = function (monsterClass) {
    this.monsterClass = monsterClass;
};

var game = {
    status : "Idle", // string, current game status, "Idle" is the initial one
    hero: new Hero("Inna", heroClasses.warrior.charClass), // object - hero object that is in game
    monsters: [] // array of monsters in game, max = maxMonsters
};

Hero.prototype.getName = function() {
    return this.name;
};

Hero.prototype.getCharClass = function() {
    return this.charClass;
};

Hero.prototype.attack = function(target) {

};
