import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAccountEditComponent } from './entry-account-edit.component';

describe('EntryAccountEditComponent', () => {
  let component: EntryAccountEditComponent;
  let fixture: ComponentFixture<EntryAccountEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAccountEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAccountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
