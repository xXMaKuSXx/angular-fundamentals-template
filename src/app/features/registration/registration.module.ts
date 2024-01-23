import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";
import { RegistrationRoutingModule } from "./registration-routing.module";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, SharedModule, RegistrationRoutingModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
