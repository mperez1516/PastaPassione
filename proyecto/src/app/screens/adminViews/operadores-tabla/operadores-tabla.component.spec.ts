import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoresTablaComponent } from './operadores-tabla.component';

describe('OperadoresTablaComponent', () => {
  let component: OperadoresTablaComponent;
  let fixture: ComponentFixture<OperadoresTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperadoresTablaComponent]
    });
    fixture = TestBed.createComponent(OperadoresTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
