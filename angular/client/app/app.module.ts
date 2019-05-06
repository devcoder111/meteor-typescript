import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { StatelessComponent }  from '../../imports/stateless.component';
import { StatefullComponent }  from '../../imports/statefull.component';
import {BlockComponent} from "../../imports/block.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StatelessComponent, StatefullComponent, BlockComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }