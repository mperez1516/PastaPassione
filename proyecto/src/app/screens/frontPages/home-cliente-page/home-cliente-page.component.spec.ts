import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientePageComponent } from './home-cliente-page.component';

describe('HomeClientePageComponent', () => {
  let component: HomeClientePageComponent;
  let fixture: ComponentFixture<HomeClientePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClientePageComponent]
    });
    fixture = TestBed.createComponent(HomeClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
