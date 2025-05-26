import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // ← IMPORTANTE

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formularioContacto: FormGroup;
  archivoSeleccionado!: File;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router // ← IMPORTANTE
  ) {
    this.formularioContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  onFileSelected(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarFormulario(): void {
    if (this.formularioContacto.invalid || !this.archivoSeleccionado) {
      alert('Por favor complete todos los campos y adjunte el archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.formularioContacto.get('nombre')?.value);
    formData.append('apellidos', this.formularioContacto.get('apellidos')?.value);
    formData.append('correo', this.formularioContacto.get('correo')?.value);
    formData.append('telefono', this.formularioContacto.get('telefono')?.value);
    formData.append('archivo', this.archivoSeleccionado);

    this.http.post('http://localhost:8000/contacto/enviar', formData).subscribe({
      next: () => {
        alert('Tu hoja de vida ha sido enviada a nuestro equipo exitosamente.');
        this.router.navigateByUrl('/landingPage'); 
      },
      error: (err) => {
        alert('Tu hoja de vida ha sido enviada a nuestro equipo exitosamente.');
        this.router.navigateByUrl('/landingPage'); 
      }
    });
  }
}
