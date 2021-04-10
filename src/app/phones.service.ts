import { PhoneStoreService } from './state/phone.store.service';
import { Phone } from './home/models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PhonesService {
  constructor(
    private httpClient: HttpClient,
    private phoneStoreService: PhoneStoreService
  ) {}

  getPhones() {
    return this.httpClient.get<Phone[]>('assets/handy.json').pipe(
      take(1),
      map((phones) => {
        return phones.map((phone) => {
          const newRaiting = parseInt(phone.rating.toPrecision(1));
          return {
            ...phone,
            selected: false,
            rating: newRaiting,
            mappedRating: new Array(newRaiting),
          };
        });
      }),
      tap((phones) => {
        this.phoneStoreService.setPhones(phones);
      })
    );
  }
}
