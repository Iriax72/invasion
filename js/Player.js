export class Player extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y) {
        super (scene, x, y, 'player_img');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.2);
        this.body.setSize(488, 320);
        this.body.setOffset(61, 40);

        this.body.setCollideWorldBounds(true);
    }
}