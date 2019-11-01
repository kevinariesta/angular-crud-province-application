import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { CountryService } from "./country.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})
export class CountryComponent implements OnInit {
  public countryList = [];
  @Output() countryName = new EventEmitter<string>();
  name: string;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryList = this.countryService.getCountryList();
  }

  emitCountryName() {
    this.countryName.emit(this.name);
  }

}
