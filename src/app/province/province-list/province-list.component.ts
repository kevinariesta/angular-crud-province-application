import {Component, OnInit} from '@angular/core';
import { ProvinceService } from "../province.service";
import { Province } from "../province.model";

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  public provinces: Province[];

  constructor(private provinceService: ProvinceService) {}

  ngOnInit() {
    console.log("ProvinceListComponent" , this.provinceService.getProvince());
    this.provinces = this.provinceService.getProvince();
  }
}
