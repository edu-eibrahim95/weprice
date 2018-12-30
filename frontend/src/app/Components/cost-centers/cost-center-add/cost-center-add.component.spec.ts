import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterAddComponent } from './cost-center-add.component';

describe('CostCenterAddComponent', () => {
  let component: CostCenterAddComponent;
  let fixture: ComponentFixture<CostCenterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCenterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCenterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
