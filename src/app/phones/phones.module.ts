import { PhoneCardComponent } from './phone-card/phone-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhoneCardComponent],
  imports: [CommonModule],
  exports: [PhoneCardComponent],
})
export class PhonesModule {}
