import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdvertisementModule { }
