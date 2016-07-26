import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Game} from '../../phaser/game';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public game: Game;
  constructor(private navController: NavController) {

  }

  ionViewLoaded() {
    this.game = new Game();
  }
}
