import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalComponent } from './adicional.component';

describe('AdicionalComponent', () => {
  let component: AdicionalComponent;
  let fixture: ComponentFixture<AdicionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionalComponent]
    });
    fixture = TestBed.createComponent(AdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
