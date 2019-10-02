import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { SharedModule } from '../shared/shared.module';
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component';

@NgModule({
  declarations: [AdvertisementComponent, AdvertisementListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdvertisementModule { }
