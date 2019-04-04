import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMapEditComponent } from './cost-map-edit.component';

describe('CostMapEditComponent', () => {
  let component: CostMapEditComponent;
  let fixture: ComponentFixture<CostMapEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMapEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMapEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
