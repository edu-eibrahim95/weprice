import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifDetailsComponent } from './product-classif-details.component';

describe('ProductClassifDetailsComponent', () => {
  let component: ProductClassifDetailsComponent;
  let fixture: ComponentFixture<ProductClassifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductClassifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
