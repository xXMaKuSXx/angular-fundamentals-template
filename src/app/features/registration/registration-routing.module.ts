import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: RegistrationComponent,
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RegistrationRoutingModule {}
