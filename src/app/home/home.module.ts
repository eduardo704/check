import { CommonUiModule } from './../common-ui/common-ui.module';
import { PhonesModule } from './../phones/phones.module';
import { BrandListComponent } from './brand-list/brand-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TeaserComponent } from './teaser/teaser.component';
import { SharedModule } from '../shared/shared.module';
import { PhoneComparissonComponent } from './phone-comparisson/phone-comparisson.component';


@NgModule({
  declarations: [
    HomeComponent,
    TeaserComponent,
    BrandListComponent,
    PhoneComparissonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PhonesModule,
    CommonUiModule
  ]
})
export class HomeModule { }
