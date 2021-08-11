import Phaser from 'phaser'

var replayButton

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('game-over-scene')
    }

    preload() {
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('gameover', 'images/gameover.png')
        this.load.image('replay', 'images/replay.png')
    }

    create() {
        this.add.image(240, 320, 'background')
        this.add.image(240, 280, 'gameover')

        // Initialize replay button
        replayButton = this.add.image(240, 420, 'replay').setInteractive().setScale(0.5)

        replayButton.once('pointerup', () => {
            this.scene.start('bunny-jump-scene')
        }, this)
    }
}