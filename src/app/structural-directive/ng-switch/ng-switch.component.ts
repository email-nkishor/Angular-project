import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <h2>ng-switch Example<h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You pick red</div>
      <div *ngSwitchCase="'green'">You pick green</div>
      <div *ngSwitchCase="'pink'">You pick pink</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `,
  styles: []
})
export class NgSwitchComponent {
  color:string='pink'

}
