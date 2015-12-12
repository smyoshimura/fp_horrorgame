var cursors, player;

var Game = {

    preload: function () {
        game.load.image('player', './assets/images/player.png');
    },

    create: function () {
        game.world.setBounds(0, 0, 800, 608);

        game.physics.startSystem(Phaser.Physics.Arcade);

        player = game.add.sprite(32, 32, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        //Initialize keys
        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#000000';
    },

    update: function () {
        console.log('Update');
        //Movement
        if (cursors.right.isDown) {
            player.body.x += 32;
        }
        else if (cursors.left.isDown) {
            player.body.x += -32;
        }
        else if (cursors.up.isDown) {
            player.body.y += -32;
        }
        else if (cursors.down.isDown) {
            player.body.y += 32;
        }
    }
};