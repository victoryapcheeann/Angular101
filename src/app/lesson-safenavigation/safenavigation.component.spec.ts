import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafenavigationComponent } from './safenavigation.component';

describe('SafenavigationComponent', () => {
  let component: SafenavigationComponent;
  let fixture: ComponentFixture<SafenavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafenavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
