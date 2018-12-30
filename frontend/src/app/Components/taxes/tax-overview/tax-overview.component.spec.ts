import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxOverviewComponent } from './tax-overview.component';

describe('TaxOverviewComponent', () => {
  let component: TaxOverviewComponent;
  let fixture: ComponentFixture<TaxOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
