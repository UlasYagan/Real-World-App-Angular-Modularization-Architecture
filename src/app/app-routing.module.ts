import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layouts/main/main.component";
import { AdminComponent } from "./layouts/admin/admin.component";
import { AdvertisementComponent } from "./modules/advertisement/components/advertisement/advertisement.component";
import { DashboardComponent } from "./modules/admin/components/dashboard/dashboard.component";
import { AdvertisementListComponent } from "./modules/advertisement/components/advertisement-list/advertisement-list.component";
import { CompanyDetailComponent } from './modules/companies/components/company-detail/company-detail.component';
import { CompanyEditComponent } from './modules/companies/components/company-edit/company-edit.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: AdvertisementComponent },
      {
        path: "advertisement-list",
        component: AdvertisementListComponent
      },
      {
        path: "company-detail/:id",
        component: CompanyDetailComponent
      },
      {
        path: "company-edit/:id",
        component: CompanyEditComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "", component: DashboardComponent }]
  },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", redirectTo: "/", pathMatch: "full"   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
