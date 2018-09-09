import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
   template: `
  <h2>Class Binding example</h2>
   <h4 class="text-sucess">Nand kishor</h4>
   <h4 [class]="classSucess">Nand kishor</h4>
   <h4 class="text-italic" [class]="classSucess">Nand kishor</h4>

   <h4 [class.text-danger]="hasError">Nand kishor</h4>
   <h4 [ngClass]="messageClass">Nand kishor</h4>
   <h4 [class]="classSucess">Nand kishor</h4>
   
  `,
  styles:[`
  .text-sucess{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-italic{
    font-style:italic;
  }
  `]
})
export class ClassBindingComponent {
  classSucess:string="text-sucess";
  hasError:boolean = true;
  isItalic:boolean = true;

  messageClass = {
    "text-sucess" : !this.hasError,
    "text-danger" : this.hasError,
    "text-italic" : this.isItalic
  }
}
