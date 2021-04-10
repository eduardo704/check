import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModal: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isModal$ = this.isModal.asObservable();
  constructor() {}

  showModal() {
    this.isModal.next(true);
  }
  hideModal() {
    this.isModal.next(false);
  }
}
