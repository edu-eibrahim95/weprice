import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChargeDetailsComponent } from './social-charge-details.component';

describe('SocialChargeDetailsComponent', () => {
  let component: SocialChargeDetailsComponent;
  let fixture: ComponentFixture<SocialChargeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChargeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChargeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
