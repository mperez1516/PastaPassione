import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOperadoresComponent } from './detalle-operadores.component';

describe('DetalleOperadoresComponent', () => {
  let component: DetalleOperadoresComponent;
  let fixture: ComponentFixture<DetalleOperadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOperadoresComponent]
    });
    fixture = TestBed.createComponent(DetalleOperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
