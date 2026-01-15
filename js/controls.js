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
        try{
            // Check if rexVirtualJoystick is loaded
            if (typeof rexVirtualJoystick === 'undefined') {
                alert("rexVirtualJoystick plugin not loaded. Check CDN script.");
                return;
            }
            // Install rexVirtualJoystick plugin if not already installed
            if (!scene.rexVirtualJoystick) {
                scene.plugins.install('rexVirtualJoystick', rexVirtualJoystick, true);
            }
            this.joystick = scene.rexVirtualJoystick.add({
                x: 300,
                y: window.innerHeight -300,
                radius: 50,
                base: scene.add.circle(0, 0, 60, 0x444444),
                thumb: scene.add.circle(0, 0, 30, 0xaaaaaa),
                //deadZone: 10,
                //fixed: false,
                //dir: '8dir',
                //forceMin: 0
            });
        } catch (e) {
            alert("Erreur joystick: " + e.message);
        }
    }

    update() {
        this.moveDir = this.joystick.angle;
        this.moveNorm = this.joystick.force;

        this.xMovement = Math.cos(this.moveDir) * this.moveNorm;
        this.yMovement = Math.sin(this.moveDir) * this.moveNorm;
    }
}