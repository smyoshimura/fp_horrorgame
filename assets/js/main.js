var game = new Phaser.Game(800, 608, Phaser.AUTO, 'game_screen');

game.state.add('Title', Title);

game.state.add('Game', Game);

game.state.add('Game_Over', Game_Over);

game.state.start('Title');

// // // // // // //
/*
var FONT = 32;
var ROWS = 10;
var COLS = 20;
var ACTORS = 5;

var asciidisplay;
var map;

var player;
var actorList;
var livingEnemies;
var actorMap;

var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'game_screen', {create: create});

function create() {
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    initMap();

    //Initialize screen - renders blank map
    asciidisplay = [];

    for (var y = 0; y < ROWS; y++) {
        var newRow = [];

        asciidisplay.push(newRow);

        for (var x = 0; x < COLS; x++) {
            newRow.push(initCell(map[y][x], x, y));
        }
    }

    initActors();

    drawMap();

    drawActors();
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Keyboard.LEFT:

        case Keyboard.RIGHT:

        case Keyboard.UP:

        case Keyboard.DOWN:
    }
}

function initCell(chr, x, y) {
    var style = { font: FONT + "px monospace", fill: "#fff" };
    return game.add.text(FONT * 0.6 * x, FONT * y, chr, style);
}

//Lite procedural map generator
function initMap() {
    map = [];
    for (var y = 0; y < ROWS; y++) {

        var newRow = [];

        for (var x = 0; x < COLS; x++) {
            if (Math.random() > 0.8) {
                newRow.push('#');
            }
            else {
                newRow.push('.');
            }
        }

        map.push(newRow);
    }
}

//Rendering map
function drawMap() {
    for (var y = 0; y < ROWS; y++) {

        for (var x = 0; x < COLS; x++) {
            asciidisplay[y][x].content = map[y][x];
        }
    }
}

function drawActors() {
    for (var a in actorList) {
        if (actorList[a] != null && actorList[a].hp > 0) {
            asciidisplay[actorList[a].y][actorList[a].x].text = a == 0 ? '' + player.hp: 'e';
        }
    }
}

//Assigns random positions to npcs
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function initActors() {
    actorList = [];
    actorMap = {};

    for (var e = 0; e < ACTORS; e++) {
        var actor = {
            x: 0,
            y: 0,
            hp: e == 0 ? 3 : 1
        };

        do {
            actor.y = randomInt(ROWS);
            actor.x = randomInt(COLS);
        }
        while (map[actor.y][actor.x] == '#' || actorMap[actor.y + "_" + actor.x] != null);

        actorMap[actor.y + "_" + actor.x] = actor;
        actorList.push(actor);
    }

    player = actorList[0];
    livingEnemies = ACTORS - 1;
}*/
