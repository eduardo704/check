import { PhonesModule } from './../phones/phones.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotepadRoutingModule } from './notepad-routing.module';
import { NotepadComponent } from './notepad.component';

@NgModule({
  declarations: [NotepadComponent],
  imports: [CommonModule, NotepadRoutingModule, PhonesModule],
})
export class NotepadModule {}
