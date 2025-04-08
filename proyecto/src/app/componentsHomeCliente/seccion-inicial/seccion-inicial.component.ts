import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/entidades/cliente/cliente';

@Component({
  selector: 'app-seccion-inicial',
  templateUrl: './seccion-inicial.component.html',
  styleUrls: ['./seccion-inicial.component.css']
})
export class SeccionInicialComponent  implements OnInit, AfterViewInit {
  //Interfaz importada
  cliente: Cliente | null = null;

  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef<HTMLVideoElement>;

  // Inyecta el servicio Router en el constructor para poder navegar
  constructor(private router: Router) { }

  ngOnInit(): void {

    // Por ahora, para que el *ngIf funcione, podemos simular un cliente:
     
  }

  // Este método se ejecuta después de que la vista del componente (HTML) se ha inicializado completamente
  ngAfterViewInit(): void {
    const videoElement = this.videoPlayerRef.nativeElement;
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        console.log("Video iniciado automáticamente.");
      }).catch(error => {
        console.error("Error al intentar iniciar el video:", error);
      });
    }  

  }

  irAlMenu(): void {
    console.log('Navegando al menú...');
    this.router.navigate(['/menu']);
  }
}
