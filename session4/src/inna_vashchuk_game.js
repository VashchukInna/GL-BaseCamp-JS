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
    idle: "Idle",
    progress: "In progress",
    finished: "Finished"
};

var gameData = {
    status: statuses,
    hero: heroClasses,
    monsters: monsterClasses
};

var maxMonsters = 2;

function Hero(name, heroClass) {
    if (Object.keys(heroClasses).indexOf(heroClass) == -1) {
        throw new Error('Incorrect character class provided');
        return;
    }

    this.name = name;
    this.charClass = heroClasses[heroClass]['charClass'];
    this.life = heroClasses[heroClass]['life'];
    this.damage = heroClasses[heroClass]['damage'];
};

Hero.prototype.getName = function () {
    return this.name;
};

Hero.prototype.getCharClass = function () {
    return this.charClass;
};

Hero.prototype.attack = function (target) {
    if (target.getCharClass() === ('warrior' && 'rogue' && 'sorcerer')) {
        return "I will attack only monsters";
    }

    target.life -= this.damage;
    target.life = Math.max(0, target.life);
    var attackMessage = (target.life == 0) ? (target.getCharClass() + ' killed') : ('done ' + this.damage + ' damage to ' + target.getCharClass());
    return "Hero attacked, " + attackMessage;
};


function Monster(monsterClass) {
    if (Object.keys(monsterClasses).indexOf(monsterClass) == -1) {
        throw new Error('Incorrect character class provided');
        return;
    }

    this.charClass = monsterClasses[monsterClass]['charClass'];
    this.life = monsterClasses[monsterClass]['life'];
    this.damage = monsterClasses[monsterClass]['damage'];
};

Monster.prototype.getCharClass = function () {
    return this.charClass;
};

Monster.prototype.getName = function () {
    return 'I am ' + this.charClass + ' I don`t have name';
};

Monster.prototype.attack = function (target) {
    if (target.getCharClass() === 'warrior') {
        return "I will attack only Hero";
    }

    target.life -= this.damage;
    target.life = Math.max(0, target.life);
    var attackMessage = (target.life == 0) ? (target.getCharClass() + ' killed') : ('done ' + this.damage + ' damage to ' + target.getCharClass());
    return "Monster attacked, " + attackMessage;
};

function Game() {
    this.status = gameData['status']['idle'];
    this.hero;
    this.monsters = [];
};

Game.prototype.beginJourney = function () {
    if (this.status !== "Idle" || this.hero === undefined || this.monsters.length != 2) {
        throw new Error('Cannot start journey, populate the world with hero and monsters first');
        return;
    }
    this.status = gameData['status']['progress'];
    return 'Your journey has started, fight monsters';
};

Game.prototype.addHero = function (heroClass) {

    if (Object.keys(heroClasses).indexOf(heroClass.getCharClass().toLowerCase()) === -1) {
        throw new Error('Only hero instance can be hero');
        return;
    } else if (this.hero !== null && this.hero !== undefined) {
        throw new Error('Only one hero can exist');
        return;
    }

    this.hero = heroClass;
    return 'Hero created, welcome ' + this.hero.getName();

};

Game.prototype.addMonster = function (monsterClass) {
    if (Object.keys(monsterClasses).indexOf(monsterClass.getCharClass().toLowerCase()) === -1) {
        throw new Error('Only monster instances can become monsters');
        return;
    } else if (this.monsters.length == maxMonsters) {
        throw new Error('Only 2 monsters can exist');
        return;
    }

    this.monsters.push(monsterClass);
    return "Monster Created, " + monsterClass.getCharClass() + " appeared in the world";

};

Game.prototype.fight = function () {
    if (this.status !== gameData['status']['progress']) {
        throw new Error('Begin your journey to start fighting monsters');
        return;
    }

    if (this.hero.life == 0) {
        return 'Monster win';
    }

    for (var i = 0; i < maxMonsters; i++) {
        if (this.monsters[i].life != 0) {
            this.hero.attack(this.monsters[i]);
            this.monsters[i].attack(this.hero);
            return this.monsters[i].life == 0 ? 'Hero win' : this.fight();
        }
    }
};

Game.prototype.finishJourney = function () {
    if (this.status !== gameData['status']['progress']) {
        return;
    }

    var allMonstersDead = true;

    for (var i = 0; i < maxMonsters; i++) {
        if (this.monsters[i].life > 0) {
            allMonstersDead = false;
        }
    }

    if (allMonstersDead) {
        this.status = gameData['status']['finished'];
        return "The Game is finished. Monsters are dead. Congratulations";
    } else if (this.hero.life == 0) {
        this.status = gameData['status']['finished'];
        return "The Game is finished. Hero is dead :(";
    } else {
        return 'Don`t stop. Some monsters are still alive. Kill them all';
    }
};