import {MobileControl} from './controls.js';

export class Player extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, isUserMobile) {
        super (scene, x, y, 'player_img');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.2);
        this.body.setSize(488, 320);
        this.body.setOffset(61, 40);

        this.body.setCollideWorldBounds(true);

        this.speed = 30;

        if (isUserMobile) {
            this.control = new MobileControl(scene);
        } else {
            alert('Les joueurs sur ordinateurs ne sont pas pris en charge, veuillez passer sur mobile.');
        }
    }

    update () {
        this.control.update();
        this.body.velocity.x = this.control.xMovement * this.speed;
        this.body.velocity.y = this.control.yMovement * this.speed;
    }
}