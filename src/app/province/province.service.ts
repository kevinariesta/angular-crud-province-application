import { Injectable } from "@angular/core";

import { Province } from "./province.model";

@Injectable({
  providedIn: 'root',
})
export class ProvinceService {
  private provinces: Province[] = [];

  addProvince(province: Province) {
    this.provinces.push(province);
  }

  getProvince() {
    return this.provinces;
  }
}
