import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMapAddComponent } from './cost-map-add.component';

describe('CostMapAddComponent', () => {
  let component: CostMapAddComponent;
  let fixture: ComponentFixture<CostMapAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMapAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMapAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
