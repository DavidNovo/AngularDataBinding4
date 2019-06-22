import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  title = 'Game Control Component';
  /* Creating new events. Sending data out of the component*/
  @Output() gameState = new EventEmitter<{running: boolean}>(true);

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.gameState.emit({
      running: true});
    console.log('Start game' + this.gameState);
  }

  stopGame() {
    this.gameState.emit({
      running: false});
    console.log('End game' + this.gameState);
  }

}
