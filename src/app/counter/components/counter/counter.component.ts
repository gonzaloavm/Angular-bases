import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter {{ counter }}</p>
  <button class="btn" (click)="increaseBy(1)">+1</button>
  <button class="btn" (click)="resetCounter()">Reset</button>
  <button class="btn" (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  constructor() { }
}
