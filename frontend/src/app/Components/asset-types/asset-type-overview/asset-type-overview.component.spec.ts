import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeOverviewComponent } from './asset-type-overview.component';

describe('AssetTypeOverviewComponent', () => {
  let component: AssetTypeOverviewComponent;
  let fixture: ComponentFixture<AssetTypeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTypeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
