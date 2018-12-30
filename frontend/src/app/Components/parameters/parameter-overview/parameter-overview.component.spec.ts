import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterOverviewComponent } from './parameter-overview.component';

describe('ParameterOverviewComponent', () => {
  let component: ParameterOverviewComponent;
  let fixture: ComponentFixture<ParameterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
