import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClientesComponent } from './menu-clientes.component';

describe('MenuClientesComponent', () => {
  let component: MenuClientesComponent;
  let fixture: ComponentFixture<MenuClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClientesComponent]
    });
    fixture = TestBed.createComponent(MenuClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
