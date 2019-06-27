import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  title = 'Game Control Component';
  /* Creating new events. Sending data out of the component*/
  /* I was using the emmitter to send state of game, not a number */
  // old =>@Output() gameState = new EventEmitter<{running: boolean}>(true);
  @Output() intervalFired = new EventEmitter<number>();

  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    // this.gameState.emit({
    //   running: true});
    console.log('Start game');
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      console.log('Playing game => ' + this.intervalFired);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
    // this.gameState.emit({
    //   running: false
    // });
    console.log('End game');
  }

}
