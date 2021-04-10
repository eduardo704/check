import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './../../common-ui/modal.service';
import { PhonesService } from './../../phones.service';
import { PhoneStoreService } from './../../state/phone.store.service';
import { MappedPhone, Tab } from './../models/model';

@Component({
  selector: 'app-phone-comparisson',
  templateUrl: './phone-comparisson.component.html',
  styleUrls: ['./phone-comparisson.component.scss'],
})
export class PhoneComparissonComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      label: 'Topsseller',
      selected: true,
      value: 'top',
    },
    {
      label: 'Neuheiten/novos',
      selected: false,
      value: 'new',
    },
    {
      label: ' Angebote/deals',
      selected: false,
      value: 'deal',
    },
    {
      label: 'Beliebtheit/popular',
      selected: false,
      value: 'pop',
    },
  ];

  phones: Array<MappedPhone> = [];
  phonesToShow$: Observable<Array<MappedPhone>>;

  constructor(
    private phonesService: PhonesService,
    private phoneStoreService: PhoneStoreService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe();
    this.selectPhonesOnTab();
  }

  selectTab(item: Tab) {
    this.tabs.forEach((tab) => (tab.selected = false));
    item.selected = true;

    this.selectPhonesOnTab();
  }
  selectPhone(item: MappedPhone) {
    this.phoneStoreService.selectPhone(item);
  }

  showModal(phone: MappedPhone) {
    this.modalService.showModal();
  }

  selectPhonesOnTab() {
    const tab = this.tabs.find((tab) => tab.selected);

    const val = tab.value;

    const valMap = {
      top: this.phoneStoreService.topPhones$,
      new: this.phoneStoreService.newPhones$,
      deal: this.phoneStoreService.dealPhones$,
      pop: this.phoneStoreService.popularPhones$,
    };

    const obs = valMap[val];

    this.phonesToShow$ = obs;
  }
}
