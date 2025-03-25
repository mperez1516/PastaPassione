import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorTableComponent } from './administrador-table.component';

describe('AdministradorTableComponent', () => {
  let component: AdministradorTableComponent;
  let fixture: ComponentFixture<AdministradorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorTableComponent]
    });
    fixture = TestBed.createComponent(AdministradorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
