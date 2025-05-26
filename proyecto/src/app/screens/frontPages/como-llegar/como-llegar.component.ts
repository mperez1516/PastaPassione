/// <reference types="google.maps" />
import { Component, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}



@Component({
  selector: 'app-como-llegar',
  templateUrl: './como-llegar.component.html',
  styleUrls: ['./como-llegar.component.css']
})
export class ComoLlegarComponent implements AfterViewInit {

  sedeLatLng = { lat: 4.6482837, lng: -74.2478942 }; // Coordenadas de ejemplo (puedes cambiarlas)

  ngAfterViewInit(): void {
    // Esperamos que el script de Google Maps haya cargado
    if ((window as any).google && google.maps) {
      this.initMap();
    } else {
      (window as any).initMap = () => this.initMap();
    }
  }

  initMap(): void {
    // Obtener ubicación actual
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Crear el mapa
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          zoom: 14,
          center: userLocation
        });

        // Crear marcador para la sede
        new google.maps.Marker({
          position: this.sedeLatLng,
          map,
          label: "Sede"
        });

        // Crear marcador para el usuario
        new google.maps.Marker({
          position: userLocation,
          map,
          label: "Tú"
        });

        // Mostrar ruta
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request: google.maps.DirectionsRequest = {
          origin: userLocation,
          destination: this.sedeLatLng,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            directionsRenderer.setDirections(result);
          } else {
            alert("No se pudo obtener la ruta: " + status);
          }
        });

      }, error => {
        alert("No se pudo obtener tu ubicación.");
      });
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  }
}
