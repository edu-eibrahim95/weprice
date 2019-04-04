import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMapOverviewComponent } from './cost-map-overview.component';

describe('CostMapOverviewComponent', () => {
  let component: CostMapOverviewComponent;
  let fixture: ComponentFixture<CostMapOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMapOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMapOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
