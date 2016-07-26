/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts" />
import * as Phaser from 'phaser';

class GameTitle extends Phaser.State {
	create() {

	}

	startGame() {
		this.game.state.start("Main");
	}
}

export default GameTitle;
