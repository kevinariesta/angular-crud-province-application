import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProvinceRegisterComponent } from "./province/province-register/province-register.component";
import { ProvinceListComponent } from "./province/province-list/province-list.component";

const routes: Routes = [
  { path: 'provinceregister', component: ProvinceRegisterComponent },
  { path: 'provincelist', component: ProvinceListComponent },
  { path: '', redirectTo: '/provinceregister', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProvinceRegisterComponent, ProvinceListComponent];
