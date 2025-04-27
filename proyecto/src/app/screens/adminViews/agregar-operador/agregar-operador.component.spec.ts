import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOperadorComponent } from './agregar-operador.component';

describe('AgregarOperadorComponent', () => {
  let component: AgregarOperadorComponent;
  let fixture: ComponentFixture<AgregarOperadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarOperadorComponent]
    });
    fixture = TestBed.createComponent(AgregarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
