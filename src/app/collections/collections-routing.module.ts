import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographyComponent } from './biography/biography.component';
import { CollectonsHomeComponent } from './collectons-home/collectons-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectonsHomeComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
