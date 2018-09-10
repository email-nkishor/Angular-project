import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `<h2>{{title}} Example</h2>
        <input type="text" #myInput />
        <button (click)="shoMessage(myInput)">Sho message</button>
  `,
  styles: []
})
export class TemplateReferenceVariablesComponent{

  title:String="Template refrence variable";
  shoMessage(input){
    console.log(input);
    alert(input.value);
  }

}
