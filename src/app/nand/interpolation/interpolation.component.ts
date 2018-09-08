import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
      <h2>{{myName}}</h2>
      <h2>{{2 + 2}}</h2>
      <h2>{{"Welcome " + myName}}</h2>
      <h2>{{myName.length}}</h2>
      <h2>{{myName.toUpperCase()}}</h2>
      <h2>{{myfunc()}}<h2>
      <h2>{{siteUrl}}</h2>
  `
})
export class InterpolationComponent {

  public myName: string = "Nand kishor";
 public siteUrl:string= window.location.href;
  myfunc() {
    return 'kkkkkk'
  }

}
