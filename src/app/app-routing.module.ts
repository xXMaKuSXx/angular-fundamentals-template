import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./features/courses/courses.component";
import {
  LoginFormComponent,
  RegistrationFormComponent,
} from "./shared/components";

export const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
  { path: "registration", component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoitingModule {}
