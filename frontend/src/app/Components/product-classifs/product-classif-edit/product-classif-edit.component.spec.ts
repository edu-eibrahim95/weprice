import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifEditComponent } from './product-classif-edit.component';

describe('ProductClassifEditComponent', () => {
  let component: ProductClassifEditComponent;
  let fixture: ComponentFixture<ProductClassifEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductClassifEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
