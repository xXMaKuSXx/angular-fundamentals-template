import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";
import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseInfoComponent } from "../course-info/course-info.component";

@NgModule({
  declarations: [CoursesComponent, CourseInfoComponent],
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
  exports: [CoursesComponent, CourseInfoComponent],
})
export class CoursesModule {}
