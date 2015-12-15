var player, eyenemy, rightKey, leftKey, upKey, downKey;

var Game = {
    preload: function () {
        game.load.image('player', './assets/images/player.png');
        game.load.image('eyenemy', './assets/images/eye.png');
    },

    create: function () {
        //Set bounds of the world
        game.world.setBounds(0, 0, 800, 608);

        //Initialize physics
        game.physics.startSystem(Phaser.Physics.Arcade);

        //Initialize player
        randomX = function () {
            return Math.floor(Math.random() * 25) * 32
        };

        randomY = function () {
            return Math.floor(Math.random() * 19) * 32
        };

        player = game.add.sprite(randomX(), randomY(), 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        //Initialize enemy - needs check for overlapping other units
        eyenemy = game.add.sprite(randomX(), randomY(), 'eyenemy');
        game.physics.arcade.enable(eyenemy);
        eyenemy.body.collideWorldBounds = true;

        //Initialize keys
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        //Grid movement on keypress
        rightKey.onDown.add(function () {
            player.x += 32;
        });
        leftKey.onDown.add(function () {
            player.x += -32;
        });
        upKey.onDown.add(function () {
            player.y += -32;
        });
        downKey.onDown.add(function () {
            player.y += 32;
        });

        game.stage.backgroundColor = '#000000';
    },

    update: function () {

    }
};