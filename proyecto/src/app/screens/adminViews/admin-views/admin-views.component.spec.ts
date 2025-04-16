import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewsComponent } from './admin-views.component';

describe('AdminViewsComponent', () => {
  let component: AdminViewsComponent;
  let fixture: ComponentFixture<AdminViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewsComponent]
    });
    fixture = TestBed.createComponent(AdminViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
