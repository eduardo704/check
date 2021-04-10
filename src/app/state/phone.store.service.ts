import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MappedPhone } from './../home/models/model';
import { SelectPhone, SetPhones } from './phone.action';
import { PhoneState, PhoneStateModel } from './phone.state';

@Injectable({
  providedIn: 'root',
})
export class PhoneStoreService {
  @Select(PhoneState.getState)
  public phoneState$: Observable<PhoneStateModel>;
  @Select(PhoneState.getPhones)
  public phones$: Observable<MappedPhone[]>;
  @Select(PhoneState.getNewPhones)
  public newPhones$: Observable<MappedPhone[]>;
  @Select(PhoneState.getTopPhones)
  public topPhones$: Observable<MappedPhone[]>;
  @Select(PhoneState.getPopularPhones)
  public popularPhones$: Observable<MappedPhone[]>;
  @Select(PhoneState.getDealPhones)
  public dealPhones$: Observable<MappedPhone[]>;
  @Select(PhoneState.getSelected)
  public getSelected$: Observable<MappedPhone[]>;
  @Select(PhoneState.getSelectedCount)
  public getSelectedCount$: Observable<number>;

  constructor(private _store: Store) {}

  @Dispatch()
  public setPhones(phones: MappedPhone[]) {
    return new SetPhones(phones);
  }
  @Dispatch()
  public selectPhone(phone: MappedPhone) {
    return new SelectPhone(phone);
  }
}
