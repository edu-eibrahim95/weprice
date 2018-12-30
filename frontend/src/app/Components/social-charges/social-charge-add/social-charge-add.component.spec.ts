import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChargeAddComponent } from './social-charge-add.component';

describe('SocialChargeAddComponent', () => {
  let component: SocialChargeAddComponent;
  let fixture: ComponentFixture<SocialChargeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChargeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChargeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
