import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInicialComponent } from './seccion-inicial.component';

describe('SeccionInicialComponent', () => {
  let component: SeccionInicialComponent;
  let fixture: ComponentFixture<SeccionInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionInicialComponent]
    });
    fixture = TestBed.createComponent(SeccionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
