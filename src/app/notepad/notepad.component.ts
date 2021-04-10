import { MappedPhone } from './../home/models/model';
import { Observable } from 'rxjs';
import { PhoneStoreService } from './../state/phone.store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
})
export class NotepadComponent implements OnInit {
  selectedPhones$: Observable<Array<MappedPhone>>;
  selectedPhonesCount$: Observable<number>;

  constructor(private phoneStoreService: PhoneStoreService) {}

  ngOnInit(): void {
    this.selectedPhones$ = this.phoneStoreService.getSelected$;
    this.selectedPhonesCount$ = this.phoneStoreService.getSelectedCount$;
  }

  selectPhone(item: MappedPhone) {
    this.phoneStoreService.selectPhone(item);
  }
}
