import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<h2>Property binding example</h2>
    <input id="myId" type="tex" value="nand">
    <input [id]="'myId'" type="tex" value="nand"><br><br>
    <input id={{myId1}} type="tex" value="nand">
    <input [id]="myId1" type="tex" value="nand"><br><br>
    <input disabled="false" id={{myId1}} type="tex" value="nand">
    <input [disabled]="false" [id]="myId1" type="tex" value="nand"><br><br>
    <input disabled="true" id={{myId1}} type="tex" value="nand">
    <input [disabled]="true" [id]="myId1" type="tex" value="nand"><br><br>
    <input bind-id="myId1" type="tex" value="nand"><br><br>

  `
})
export class PropertyBindingComponent {
  myId1:string="dynamicID";
}
