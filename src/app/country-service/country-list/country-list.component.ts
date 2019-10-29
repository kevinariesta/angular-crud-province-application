import { Component, OnInit } from '@angular/core';

import { Country } from "../country.model";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
  }

}
