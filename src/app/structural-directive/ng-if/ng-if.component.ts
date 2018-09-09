import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `<h2> Example</h2>
  <h3 *ngIf="true"> 1) Example 1</h3>
  
  <h3 *ngIf="showText"> 2) Example 2</h3>
  3) <button (click)="toogleMe()">toogle me</button>  <span *ngIf="isToogle" > Example 3 </span> 
  <br><br>
  
  5) <button (click)="toogleName()">toogle if else </button> 
  <span *ngIf="isDisplayName; else elseBlock">Nand kishor</span>
  <ng-template #elseBlock><span>9716694602</span></ng-template>

  <br><br>
  5) <button (click)="toogle2()">toogle else ng- template </button> 
  <div *ngIf=" isDisplay; then thenBlock; else elseBlock2"></div>
  <ng-template #thenBlock><p>If Block</p></ng-template>
  <ng-template #elseBlock2><p>Else Block</p></ng-template>
  
`,
  styles: []
})
export class NgIfComponent {
 
  showText : boolean = true
  isToogle:boolean = true;
  isDisplayName:boolean=false;
  isDisplay:boolean=false;
  toogleMe(){
    this.isToogle = !this.isToogle;
  }
  toogleName(){
    this.isDisplayName = !this.isDisplayName;
  }
  toogle2(){
    this.isDisplay= !this.isDisplay;
  }
}
