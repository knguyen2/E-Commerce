import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressesdetailComponent } from './dressesdetail.component';

describe('DressesdetailComponent', () => {
  let component: DressesdetailComponent;
  let fixture: ComponentFixture<DressesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
