import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalOverviewComponent } from './local-overview.component';

describe('LocalOverviewComponent', () => {
  let component: LocalOverviewComponent;
  let fixture: ComponentFixture<LocalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
