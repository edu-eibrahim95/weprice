import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChargeEditComponent } from './social-charge-edit.component';

describe('SocialChargeEditComponent', () => {
  let component: SocialChargeEditComponent;
  let fixture: ComponentFixture<SocialChargeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChargeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChargeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
