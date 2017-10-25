import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterfallComponent } from './shared/waterfall/waterfall.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterfallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
