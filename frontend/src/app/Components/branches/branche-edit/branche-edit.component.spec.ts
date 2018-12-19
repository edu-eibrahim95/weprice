import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheEditComponent } from './branche-edit.component';

describe('BrancheEditComponent', () => {
  let component: BrancheEditComponent;
  let fixture: ComponentFixture<BrancheEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrancheEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
