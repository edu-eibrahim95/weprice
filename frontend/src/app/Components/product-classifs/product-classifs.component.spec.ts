import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifsComponent } from './product-classifs.component';

describe('ProductClassifsComponent', () => {
  let component: ProductClassifsComponent;
  let fixture: ComponentFixture<ProductClassifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductClassifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
