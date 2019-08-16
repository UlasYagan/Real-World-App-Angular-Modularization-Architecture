import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './layouts/main/main.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdvertisementComponent } from './modules/advertisement/components/advertisement/advertisement.component';
import { AdminHomeComponent } from './modules/admin/components/admin-home/admin-home.component';
import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [{ path: "", component: AdvertisementComponent }]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "", component: AdminHomeComponent }]
  },

  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
