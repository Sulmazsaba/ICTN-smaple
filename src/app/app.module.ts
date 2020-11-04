import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RealPersonFormComponent } from './main-form/real-person-form/real-person-form.component';
import { LegalPersonFormComponent } from './main-form/legal-person-form/legal-person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    RealPersonFormComponent,
    LegalPersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
