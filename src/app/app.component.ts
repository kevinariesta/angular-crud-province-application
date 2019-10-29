import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal-component/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-province';
  modalOptions: NgbModalOptions;
  closeResult: string;

  constructor(
    private modalService: NgbModal) {
      this.modalOptions = {
        backdropClass: "customBackdrop",
      }
  }

  // open() {
  //   this.modalService.open(content, this.modalOptions).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.modal_title = 'Province Confirmation';
    modalRef.componentInstance.modal_content = 'Are you sure with your data input?';
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
}
