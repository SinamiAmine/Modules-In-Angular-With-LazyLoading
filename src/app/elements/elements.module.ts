import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { RepeatTagDirective } from './repeat-tag.directive';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceHolderComponent,
    RepeatTagDirective,
    SegmentComponent,
  ],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
})
export class ElementsModule {}
