import { MappedPhone } from './../home/models/model';
import { SetPhones, SelectPhone } from './phone.action';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Phone } from '../home/models/model';
import { patch, updateItem } from '@ngxs/store/operators';
export interface PhoneStateModel {
  phones: Array<MappedPhone>;
}

@State<PhoneStateModel>({
  name: 'phone',
  defaults: {
    phones: [],
  },
})
@Injectable()
export class PhoneState {
  @Selector()
  public static getState(state: PhoneStateModel) {
    return state;
  }
  @Selector()
  public static getPhones(state: PhoneStateModel) {
    return state.phones;
  }
  @Selector()
  public static getNewPhones(state: PhoneStateModel) {
    return state.phones.filter((phone) => phone.new);
  }
  @Selector()
  public static getTopPhones(state: PhoneStateModel) {
    return state.phones.filter((phone) => phone.topseller);
  }
  @Selector()
  public static getPopularPhones(state: PhoneStateModel) {
    return state.phones.filter((phone) => phone.rating > 4);
  }
  @Selector()
  public static getDealPhones(state: PhoneStateModel) {
    return state.phones.filter((phone) => phone.price_reduced !== null);
  }
  @Selector()
  public static getSelected(state: PhoneStateModel) {
    return state.phones.filter((phone) => phone.selected);
  }
  @Selector()
  public static getSelectedCount(state: PhoneStateModel) {
    return this.getSelected(state).length;
  }
  @Action(SetPhones)
  public setPhones(ctx: StateContext<PhoneStateModel>, { payload }: SetPhones) {
    const state = ctx.getState();
    ctx.setState({ ...state, phones: payload });
  }
  @Action(SelectPhone)
  public selectPhones(
    ctx: StateContext<PhoneStateModel>,
    { payload }: SelectPhone
  ) {
    const state = ctx.getState();

    ctx.setState(
      patch({
        phones: updateItem(
          (item: MappedPhone) => item.id === payload.id,
          patch({ selected: !payload.selected })
        ),
      })
    );
  }
}
