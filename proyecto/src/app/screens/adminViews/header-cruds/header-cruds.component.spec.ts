import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCrudsComponent } from './header-cruds.component';

describe('HeaderCrudsComponent', () => {
  let component: HeaderCrudsComponent;
  let fixture: ComponentFixture<HeaderCrudsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCrudsComponent]
    });
    fixture = TestBed.createComponent(HeaderCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
