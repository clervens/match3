/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts" />
import * as Phaser from 'phaser';

class Preload extends Phaser.State {
	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');

		// These assets are from Puzzle Pack II (www.kenney.nl)
		this.game.load.image('black', 'build/images/gems/tileBlack_10.png');
		this.game.load.image('blue', 'build/images/gems/tileBlue_10.png');
		this.game.load.image('green', 'build/images/gems/tileGreen_10.png');
		this.game.load.image('grey', 'build/images/gems/tileGrey_10.png');
		this.game.load.image('orange', 'build/images/gems/tileOrange_09.png');
		this.game.load.image('pink', 'build/images/gems/tilePink_10.png');
		this.game.load.image('red', 'build/images/gems/tileRed_10.png');
		this.game.load.image('yellow', 'build/images/gems/tileYellow_10.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
		console.log("Set State to Main");
	}
}

export default Preload;
