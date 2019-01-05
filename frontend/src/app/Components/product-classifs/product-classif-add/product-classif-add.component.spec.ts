import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifAddComponent } from './product-classif-add.component';

describe('ProductClassifAddComponent', () => {
  let component: ProductClassifAddComponent;
  let fixture: ComponentFixture<ProductClassifAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductClassifAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
