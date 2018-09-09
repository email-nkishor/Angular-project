import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <h2>ng-for Example </h2>
    <ul>
     <li *ngFor="let color of colors; index as i; first as f; last as l; odd as o">
       <b>{{f}} {{ i+1 }}</b> {{color | uppercase}}
     </li>
    </ul>
  `,
  styles: []
})
export class NgForComponent {

  colors:string[] =['red','green','blue','yellow','pink'];
}
