import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { InterpolationComponent } from './nand/interpolation/interpolation.component';
import { PropertyBindingComponent } from './nand/property-binding/property-binding.component';
import { ClassBindingComponent } from './nand/class-binding/class-binding.component';
import { StyleBindingComponent } from './nand/style-binding/style-binding.component';
import { EventBindingComponent } from './nand/event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './nand/template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './nand/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
