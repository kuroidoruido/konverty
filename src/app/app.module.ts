import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { UnitCardComponent } from './unit-card/unit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
