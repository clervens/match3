import * as Phaser from 'phaser';

import Boot from './states/boot';
import Preload from './states/preload';
import GameTitle from './states/game_title';
import Main from './states/main';
import GameOver from './states/game_over';

export class Game extends Phaser.Game {

    constructor() {
      /* Scale the game size for high resolution devices - store this value globally
       * Image assets should be 3x larger than they need to be, then they will be scaled down
       * according to the scale ratio (i.e an iPhone 5 with a DPR of 2 will have a scale ratio
       * of 2 / 3 which is 0.66..., so the image will be scaled down by one third which is what we want)
       */
      var scaleRatio = window.devicePixelRatio / 3;

      //Create a new game instance and assign it to the 'gameArea' div
      super(window.innerWidth * window.devicePixelRatio,
        (window.innerHeight * window.devicePixelRatio) - 45 * window.devicePixelRatio,
        Phaser.AUTO, 'gameArea');

        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('GameTitle', GameTitle, false);
        this.state.add('Main', Main, false);
        this.state.add('GameOver', GameOver, false);

        this.state.start('Boot');
    }
}
