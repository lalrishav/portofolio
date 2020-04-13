import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabViewComponent } from './header-tab-view.component';

describe('HeaderTabViewComponent', () => {
  let component: HeaderTabViewComponent;
  let fixture: ComponentFixture<HeaderTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
