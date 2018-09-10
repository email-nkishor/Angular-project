import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h2>Style Binding example</h2>
  <h4 [style.color]="'red'">Style Binding</h4>
  <h4 [style.color]="hasError ? 'yellow': 'green' ">Style Binding</h4>
  <h4 [ngStyle]="titleStyle">Style Binding</h4>
  <h4 [ngStyle]="{color:hasError ? 'red' : 'blue', fontStyle : hasItalic ? 'italic' : 'normal' }">Style Binding</h4>


  `,
  styles:[` `]
})
export class StyleBindingComponent{
  hasError:boolean=true;
  hasItalic:boolean=true;
  highlightColor:string="orange";
  titleStyle:{}={
    color:"blue",
    fontStyle:"italic"
  }
}
