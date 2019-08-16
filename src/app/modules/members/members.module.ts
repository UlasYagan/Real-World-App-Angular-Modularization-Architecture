import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MemberListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MembersModule { }
