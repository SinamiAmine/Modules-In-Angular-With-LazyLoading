import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTag]',
})
export class RepeatTagDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appRepeatTag') set repeatTag(value: number) {
    this.viewContainer.clear();
    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
