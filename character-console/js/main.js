const config = {
    type: Phaser.WebGL,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var alphabet;
var dragon;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'images/sky.png');
  this.load.image('ground', 'images/platform.png');
  this.load.image('star', 'images/star.png');
  this.load.image('bomb', 'images/bomb.png');
  this.load.spritesheet('dude', 'images/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
  this.add.image(400, 300, 'sky');

  platforms = this.physics.add.staticGroup();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
}

function update ()
{
}
