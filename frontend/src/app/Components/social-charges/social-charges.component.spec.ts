import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChargesComponent } from './social-charges.component';

describe('SocialChargesComponent', () => {
  let component: SocialChargesComponent;
  let fixture: ComponentFixture<SocialChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
