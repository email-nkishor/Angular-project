import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h2>Two way binding Example</h2>
    <input type="text" [(ngModel)]="myTextbox" />
    {{myTextbox}}
  `,
  styles: []
})
export class TwoWayBindingComponent {
  myTextbox:string="kishor";
}
