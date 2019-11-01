import { Country } from "./country.model";

export class CountryService {
  getCountryList() {
    return [
      new Country("1", "China"),
      new Country("2", "Denmark"),
      new Country("3", "India"),
      new Country("4", "Indonesia"),
      new Country("5", "Korea"),
      new Country("6", "Germany"),
      new Country("7", "South Africa"),
      new Country("8", "United States")
    ];
  }
}
