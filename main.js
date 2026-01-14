import {Datas} from './js/Datas.js';
import {Player} from './js/Player.js'

// const rexVirtualJoystick = window.rexVirtualJoystick;

const gameContainer = document.querySelector("#game-container");

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: gameContainer,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        // temporaire:
        arcade: {
            debug: true
        }
    },
    plugin: {
        scene: [
            {
                key: 'rexVirtualJoystick',
                plugin: rexvirtualjoystickplugin,
                mapping: 'rexVirtualJoystick'
            }
        ]
    }
}

const game = new Phaser.Game(config);

function preload () {
    this.load.image("player_img", "./assets/player_img.png");
    this.load.image("meteor_img", "./assets/meteor_img.png");
}

function create () {
    this.player = new Player(this, Datas.playerSpawn.x, Datas.playerSpawn.y, Datas.isUserMobile);
}

function update () {
    this.player.update();
}