import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilBaseComponent } from './oil-base.component';

describe('OilBaseComponent', () => {
  let component: OilBaseComponent;
  let fixture: ComponentFixture<OilBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
