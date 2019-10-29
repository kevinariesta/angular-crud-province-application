import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal-component/modal.component";
import { CountryListComponent } from './country-service/country-list/country-list.component';
import { CountryServiceComponent } from './country-service/country-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CountryListComponent,
    CountryServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
