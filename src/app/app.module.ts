import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import {counterReducer} from "./counter.reducer";

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({}, {})
    StoreModule.forRoot({count: counterReducer}) // This line added without tests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
