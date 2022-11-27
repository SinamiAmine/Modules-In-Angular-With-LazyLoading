import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ModalHomeComponent } from './modal-home/modal-home.component';
import { ModalComponent } from './modal/modal.component';
import { ModsRoutingModule } from './mods-routing.module';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModalComponent, ModalHomeComponent, AccordionComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
