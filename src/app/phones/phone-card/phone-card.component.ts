import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MappedPhone } from './../../home/models/model';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss'],
})
export class PhoneCardComponent implements OnInit {
  @Input() phone: MappedPhone;

  @Output() selectPhoneEmitter = new EventEmitter();
  @Output() buyPhone = new EventEmitter();

  phoneImgUrl = 'assets/images/phones/';

  constructor() {}

  ngOnInit() {}

  selectPhone() {
    this.selectPhoneEmitter.emit(this.phone);
  }
  buy() {
    this.buyPhone.emit(this.phone);
  }
}
