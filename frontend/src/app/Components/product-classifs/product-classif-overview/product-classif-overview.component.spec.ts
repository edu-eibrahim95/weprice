import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifOverviewComponent } from './product-classif-overview.component';

describe('ProductClassifOverviewComponent', () => {
  let component: ProductClassifOverviewComponent;
  let fixture: ComponentFixture<ProductClassifOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductClassifOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
