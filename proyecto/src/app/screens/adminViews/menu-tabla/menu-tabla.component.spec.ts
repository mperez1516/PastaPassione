import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTablaComponent } from './menu-tabla.component';

describe('MenuTablaComponent', () => {
  let component: MenuTablaComponent;
  let fixture: ComponentFixture<MenuTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTablaComponent]
    });
    fixture = TestBed.createComponent(MenuTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
