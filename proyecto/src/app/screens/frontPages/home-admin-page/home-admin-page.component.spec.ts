import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminPageComponent } from './home-admin-page.component';

describe('HomeAdminPageComponent', () => {
  let component: HomeAdminPageComponent;
  let fixture: ComponentFixture<HomeAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminPageComponent]
    });
    fixture = TestBed.createComponent(HomeAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
