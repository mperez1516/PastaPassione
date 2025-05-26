/// <reference types="google.maps" />
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  sedeLatLng = { lat: 4.6482837, lng: -74.2478942 }; // Valor por defecto

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // Obtener coordenadas desde la URL
    const lat = parseFloat(this.route.snapshot.paramMap.get('lat') || '');
    const lng = parseFloat(this.route.snapshot.paramMap.get('lng') || '');

    if (!isNaN(lat) && !isNaN(lng)) {
      this.sedeLatLng = { lat, lng };
    }

    // Esperamos que el script de Google Maps haya cargado
    if ((window as any).google && google.maps) {
      this.initMap();
    } else {
      (window as any).initMap = () => this.initMap();
    }
  }

  initMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          zoom: 14,
          center: userLocation
        });

        new google.maps.Marker({
          position: this.sedeLatLng,
          map,
          label: "Sede"
        });

        new google.maps.Marker({
          position: userLocation,
          map,
          label: "Tú"
        });

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
