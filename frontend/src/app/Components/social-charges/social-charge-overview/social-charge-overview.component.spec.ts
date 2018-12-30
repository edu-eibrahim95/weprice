import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChargeOverviewComponent } from './social-charge-overview.component';

describe('SocialChargeOverviewComponent', () => {
  let component: SocialChargeOverviewComponent;
  let fixture: ComponentFixture<SocialChargeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChargeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChargeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
