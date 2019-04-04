import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMapsComponent } from './cost-maps.component';

describe('CostMapsComponent', () => {
  let component: CostMapsComponent;
  let fixture: ComponentFixture<CostMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
