import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";


@NgModule({
  //esto es para uso solo dentro del modulo
  declarations: [
    CounterComponent
  ],
  //con el exports indicas que se puede usar fuera del modulo
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
