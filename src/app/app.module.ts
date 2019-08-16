import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseService } from './layouts/base.service';
import { AdminComponent } from './layouts/admin/admin.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedModule } from './modules/shared/shared.module';
import { AdvertisementModule } from './modules/advertisement/advertisement.module';
import { CoreModule } from './modules/core/core.module';
import { AdminModule } from './modules/admin/admin.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { MembersModule } from './modules/members/members.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AdvertisementModule,
    AdminModule,
    CompaniesModule,
    MembersModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
