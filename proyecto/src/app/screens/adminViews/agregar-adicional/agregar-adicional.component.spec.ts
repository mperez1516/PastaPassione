import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAdicionalComponent } from './agregar-adicional.component';

describe('AgregarAdicionalComponent', () => {
  let component: AgregarAdicionalComponent;
  let fixture: ComponentFixture<AgregarAdicionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAdicionalComponent]
    });
    fixture = TestBed.createComponent(AgregarAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
