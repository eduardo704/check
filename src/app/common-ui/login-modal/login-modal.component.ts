import { ModalService } from './../modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  isModal=false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  this.modalService.isModal$.subscribe(isModal=>{
    this.isModal=isModal
  })
  }

  hide(){
    this.modalService.hideModal()
  }

}
