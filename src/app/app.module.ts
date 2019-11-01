import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal-component/modal.component";
import { CountryComponent } from "./country/country.component";
import { CountryService } from "./country/country.service";
import { ProvinceService } from "./province/province.service";
import { ProvinceListComponent } from "./province/province-list/province-list.component";
import { ProvinceRegisterComponent } from "./province/province-register/province-register.component";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CountryComponent,
    ProvinceListComponent,
    ProvinceRegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [CountryService, ProvinceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
