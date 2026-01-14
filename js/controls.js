// abstract
class Control {
    constructor (scene) {
        this.scene = scene;
        this.movement = new Phaser.Math.Vector3(0, 0, 0);
    }

    update() {
        console.log("dev error: the update function of the Control class should have been overrided. The Control class should be abstract. (From 'invasion/js/controls.js', ligne 10.)")
    }
}

//------------------------------------------------------------

export class MobileControl extends Control {
    constructor (scene) {
        super(scene);
        this.joystick = scene.rexVirtualJoystick.add(scene, {
            x: 150,
            y: 450,
            radius: 60,
            base: scene.add.circle(0, 0, 60, 0x888888).setAlpha(0.5),
            thumb: scene.add.circle(0, 0, 30, 0xcccccc).setAlpha(0.8),

            dir: '8dir',
            forceMin: 0
        });
    }

    update() {
        this.moveDir = this.joystick.angle;
        this.moveNorm = this.joystick.force;

        this.xMovement = Math.cos(this.moveDir) * this.moveNorm;
        this.yMovement = Math.sin(this.moveDir) * this.moveNorm;
    }
}