import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectonsHomeComponent } from './collectons-home.component';

describe('CollectonsHomeComponent', () => {
  let component: CollectonsHomeComponent;
  let fixture: ComponentFixture<CollectonsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectonsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
