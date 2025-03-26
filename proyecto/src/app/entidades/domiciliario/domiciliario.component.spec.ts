import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliarioComponent } from './domiciliario.component';

describe('DomiciliarioComponent', () => {
  let component: DomiciliarioComponent;
  let fixture: ComponentFixture<DomiciliarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomiciliarioComponent]
    });
    fixture = TestBed.createComponent(DomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
