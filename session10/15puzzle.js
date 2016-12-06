//15 puzzle using MVC
//declare objects: model, view, controller
var M = {},
    V = {},
    C = {};

//get data from localStorage
M.getData = function () {
    if (!localStorage.getItem('saveData')) {
        M.data = M.getData();
    }
    return JSON.parse(localStorage.getItem('saveData'));
};
M.data = M.getData();

//set data in localStorage
M.setData = function (data) {
    if (data !== undefined) {
        localStorage.setItem('saveData', JSON.stringify(data));
    }
};

//draw battlefield
function drawPuzzles() {
    var mainBlock = document.getElementsByClassName('main-block')[0];
    var block = document.createElement('div');
    var clone = block.cloneNode();
    clone.className = 'main';
    for (var i = 0; i < 4; i++) {
        var row = block.cloneNode();
        row.className = 'row row' + i;
        for (var j = 0; j < 4; j++) {
            var col = block.cloneNode();
            col.className = 'col';
            col.setAttribute('position', j);
            row.appendChild(col);
        }
        clone.appendChild(row);
    }
    var button = document.createElement('button');
    button.textContent = 'New Game';
    button.className = 'newGame';
    mainBlock.appendChild(clone);
    mainBlock.appendChild(button);
}

//fill block with numbers
function getNumbers(data) {
    var getData = data;
    for (var i = 0; i < getData.length; i++) {
        document.getElementsByClassName('col')[i].textContent = getData[i];
    }
}

V.render = function () {
    drawPuzzles();
    getNumbers(M.data);
};

//set random numbers of blocks
function shuffleOfNumbers() {
    var data = M.data;

    function setRandom() {
        return 0.5 - Math.random();
    }

    var mainBlock = document.getElementsByClassName('main-block')[0];
    mainBlock.textContent = '';
    C.handler();
    data = data.sort(setRandom);
    M.setData(data);
}

//move elements
function moveValues(event) {
    var cell = event.target;
    var cellAttributes = event.target.getAttribute('position');
    if (cell.nextSibling && cell.nextSibling.textContent === ' ') {
        cell.nextSibling.textContent = cell.textContent;
        cell.textContent = ' ';
    }
    else if (cell.parentElement.previousElementSibling) {
        var moveUp = cell.parentElement.previousElementSibling.children;
        for (var i = 0; i < moveUp.length; i++) {
            if (moveUp[i].getAttribute('position') === cellAttributes && moveUp[i].textContent === ' ') {
                moveUp[i].textContent = cell.textContent;
                cell.textContent = ' ';
            }
        }
    }
    if (cell.parentElement.nextElementSibling) {
        var moveDown = cell.parentElement.nextElementSibling.children;
        for (var j = 0; j < moveDown.length; j++) {
            if (moveDown[j].getAttribute('position') === cellAttributes && moveDown[j].textContent === ' ') {
                moveDown[j].textContent = cell.textContent;
                cell.textContent = ' ';
            }
        }
    }
    if (cell.previousSibling && cell.previousSibling.textContent === ' ') {
        cell.previousSibling.textContent = cell.textContent;
        cell.textContent = ' ';
    }
    C.checkWin();
}

//check if user wins
C.checkWin = function () {
    var data = JSON.stringify(M.data);
    for (var i = 1; i <= 15; i++) {
        if (data == 15)
            alert('Congratulation! You win!');
    }
};

//initialize the game
C.handler = function () {
    M.setData();
    V.render(M);
    var main = document.getElementsByClassName('main')[0];
    main.addEventListener('click', moveValues);
    var newGame = document.getElementsByClassName('newGame')[0];
    newGame.addEventListener('click', shuffleOfNumbers);
};
window.onload = C.handler;