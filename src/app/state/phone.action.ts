import { MappedPhone, Tab } from './../home/models/model';

export class SetPhones {
  public static readonly type = '[Phone] Set phones';
  constructor(public payload: Array<MappedPhone>) {}
}
export class SelectTab {
  public static readonly type = '[Phone] Select Tab';
  constructor(public payload: Tab) {}
}
export class SelectPhone {
  public static readonly type = '[Phone] Select Phone';
  constructor(public payload: MappedPhone) {}
}
