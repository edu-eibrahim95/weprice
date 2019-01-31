import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAccountsComponent } from './entry-accounts.component';

describe('EntryAccountsComponent', () => {
  let component: EntryAccountsComponent;
  let fixture: ComponentFixture<EntryAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
