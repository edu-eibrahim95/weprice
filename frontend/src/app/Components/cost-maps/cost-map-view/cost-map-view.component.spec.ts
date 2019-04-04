import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMapViewComponent } from './cost-map-view.component';

describe('CostMapViewComponent', () => {
  let component: CostMapViewComponent;
  let fixture: ComponentFixture<CostMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
