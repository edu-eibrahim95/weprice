import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotAddComponent } from './spot-add.component';

describe('SpotAddComponent', () => {
  let component: SpotAddComponent;
  let fixture: ComponentFixture<SpotAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
