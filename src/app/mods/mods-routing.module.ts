import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalHomeComponent } from './modal-home/modal-home.component';

const routes: Routes = [
  {
    path: '',
    component: ModalHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
