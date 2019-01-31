import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAccountAddComponent } from './entry-account-add.component';

describe('EntryAccountAddComponent', () => {
  let component: EntryAccountAddComponent;
  let fixture: ComponentFixture<EntryAccountAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAccountAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
