import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ProvinceService } from "../province.service";
import { Province } from "../province.model";

@Component({
  selector: 'app-province-register',
  templateUrl: './province-register.component.html',
  styleUrls: ['./province-register.component.css']
})
export class ProvinceRegisterComponent {
  modalOptions: NgbModalOptions;
  closeResult: string;
  code: number;
  name: string;
  description: string;
  country: string;
  province: Province;

  constructor(
    private modalService: NgbModal,
    private provinceService: ProvinceService) {
    this.modalOptions = {
      backdropClass: "customBackdrop",
    }
  }

  // open() {
  //   const modalRef = this.modalService.open(ModalComponent);
  //   modalRef.componentInstance.modal_title = 'Province Confirmation';
  //   modalRef.componentInstance.modal_content = 'Are you sure with your data input?';
  // }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  setCountryName($event) {
    this.country = $event;
  }

  onSaveProvince() {
    this.province = new Province(this.code, this.name, this.country, this.description);
    this.provinceService.addProvince(this.province);
    console.log("ProvinceRegisterComponent : " , this.province);
  }
}
