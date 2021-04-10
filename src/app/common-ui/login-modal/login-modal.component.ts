import { ModalService } from './../modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit, OnDestroy {
  isModal = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.isModal$.pipe(takeUntil(this.destroy$)).subscribe((isModal) => {
      this.isModal = isModal;
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  hide() {
    this.modalService.hideModal();
  }
}
