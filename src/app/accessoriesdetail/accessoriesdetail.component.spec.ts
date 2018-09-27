import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesdetailComponent } from './accessoriesdetail.component';

describe('AccessoriesdetailComponent', () => {
  let component: AccessoriesdetailComponent;
  let fixture: ComponentFixture<AccessoriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
