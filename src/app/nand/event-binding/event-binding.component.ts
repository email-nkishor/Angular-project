import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <h2>Event Binding Example</h2>
  <input type="text" #name (keyup)="valueChange($event,name)">
  <button [disabled]="isDisable ? true : false" (click)="onClick(name)">Click me </button>
  {{name.value ? 'Hello ' + name.value : ''}}
  <br>
  {{greeting}} <br>
  `
})
export class EventBindingComponent {

  greeting:string='';
  isDisable:boolean=true;
  onClick(name){
    // alert(name.value);
this.greeting= "Welcome to " + name.value;
    console.log('Textbox value is ',name.value );
  }
  valueChange(event,name){
    // console.log(name.value)
    console.log(event)
    this.isDisable = name.value.length>0 ? false : true;
  }
}
