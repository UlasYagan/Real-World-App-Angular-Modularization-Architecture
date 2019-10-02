import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/auth/login/login.component';
import { MemberRegisterComponent } from './components/auth/member-register/member-register.component';
import { CompanyRegisterComponent } from './components/auth/company-register/company-register.component';

@NgModule({
  declarations: [LoginComponent, MemberRegisterComponent, CompanyRegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
