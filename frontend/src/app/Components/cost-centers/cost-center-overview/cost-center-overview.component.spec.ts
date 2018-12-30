import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterOverviewComponent } from './cost-center-overview.component';

describe('CostCenterOverViewComponent', () => {
  let component: CostCenterOverviewComponent;
  let fixture: ComponentFixture<CostCenterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCenterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCenterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
