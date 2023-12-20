import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="decreasyBy()">-1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasyBy()">+1</button>
  `
})

export class CounterComponent  {
  constructor() { }

  public counter:number = 10;

  increasyBy():void{
    this.counter = this.counter+1;
  }

  decreasyBy():void{
    this.counter -=1;
  }

  reset():void{
    this.counter = 10;
  }
}
