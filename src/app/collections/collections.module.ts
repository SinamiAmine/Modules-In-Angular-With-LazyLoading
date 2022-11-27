import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectonsHomeComponent } from './collectons-home/collectons-home.component';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [CollectonsHomeComponent, TableComponent, BiographyComponent, PartnersComponent, CompaniesComponent, TabsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
})
export class CollectionsModule {}
