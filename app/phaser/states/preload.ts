/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts" />
import * as Phaser from 'phaser';

class Preload extends Phaser.State {
	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
		console.log("Set State to Main");
	}
}

export default Preload;
