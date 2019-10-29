import { Component, OnInit } from '@angular/core';

import { Country } from "./country.model";

@Component({
  selector: 'app-country-service',
  templateUrl: './country-service.component.html',
  styleUrls: ['./country-service.component.css']
})
export class CountryServiceComponent implements OnInit {
  countryList: Country[] = [
    new Country("1", "China"),
    new Country("2", "Denmark"),
    new Country("3", "India"),
    new Country("4", "Indonesia"),
    new Country("5", "Korea"),
    new Country("6", "Germany"),
    new Country("7", "South Africa"),
    new Country("8", "United States")
  ];
  initialOption = true;

  constructor() { }

  ngOnInit() {
  }

}
