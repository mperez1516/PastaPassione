import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInicioComponent } from './video-inicio.component';

describe('VideoInicioComponent', () => {
  let component: VideoInicioComponent;
  let fixture: ComponentFixture<VideoInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoInicioComponent]
    });
    fixture = TestBed.createComponent(VideoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
