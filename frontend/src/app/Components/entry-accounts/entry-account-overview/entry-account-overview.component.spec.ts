import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAccountOverviewComponent } from './entry-account-overview.component';

describe('EntryAccountOverviewComponent', () => {
  let component: EntryAccountOverviewComponent;
  let fixture: ComponentFixture<EntryAccountOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAccountOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAccountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
