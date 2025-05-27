import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoLlegarComponent } from './como-llegar.component';

describe('ComoLlegarComponent', () => {
  let component: ComoLlegarComponent;
  let fixture: ComponentFixture<ComoLlegarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoLlegarComponent]
    });
    fixture = TestBed.createComponent(ComoLlegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
