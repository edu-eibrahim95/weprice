import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalEditComponent } from './local-edit.component';

describe('LocalEditComponent', () => {
  let component: LocalEditComponent;
  let fixture: ComponentFixture<LocalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
