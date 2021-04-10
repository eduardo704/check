import { PhoneStoreService } from './../../state/phone.store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count$;
  constructor(private phoneStoreService: PhoneStoreService) {}

  ngOnInit(): void {
    this.count$ = this.phoneStoreService.getSelectedCount$;
  }
}
