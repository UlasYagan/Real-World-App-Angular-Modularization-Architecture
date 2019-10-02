import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';

@NgModule({
  declarations: [CompanyDetailComponent, CompanyEditComponent],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
