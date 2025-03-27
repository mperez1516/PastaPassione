import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalesTablaComponent } from './adicionales-tabla.component';

describe('AdicionalesTablaComponent', () => {
  let component: AdicionalesTablaComponent;
  let fixture: ComponentFixture<AdicionalesTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionalesTablaComponent]
    });
    fixture = TestBed.createComponent(AdicionalesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
