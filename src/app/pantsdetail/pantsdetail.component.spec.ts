import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantsdetailComponent } from './pantsdetail.component';

describe('PantsdetailComponent', () => {
  let component: PantsdetailComponent;
  let fixture: ComponentFixture<PantsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
