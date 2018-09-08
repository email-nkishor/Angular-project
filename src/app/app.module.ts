import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './nand/interpolation/interpolation.component';
import { PropertyBindingComponent } from './nand/property-binding/property-binding.component';
import { ClassBindingComponent } from './nand/class-binding/class-binding.component';
import { StyleBindingComponent } from './nand/style-binding/style-binding.component';
import { EventBindingComponent } from './nand/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
