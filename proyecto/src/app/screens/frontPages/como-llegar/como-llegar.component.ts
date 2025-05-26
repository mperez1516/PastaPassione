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
  sedeLatLng = { lat: 4.6482837, lng: -74.2478942 };
  selectedTravelMode: google.maps.TravelMode = google.maps.TravelMode.DRIVING;
  tiempoEstimado: string | null = null;

    google = google; 

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const lat = parseFloat(this.route.snapshot.paramMap.get('lat') || '');
    const lng = parseFloat(this.route.snapshot.paramMap.get('lng') || '');

    if (!isNaN(lat) && !isNaN(lng)) {
      this.sedeLatLng = { lat, lng };
    }

    if ((window as any).google && google.maps) {
      this.initMap();
    } else {
      (window as any).initMap = () => this.initMap();
    }
  }

  setTravelMode(mode: google.maps.TravelMode): void {
    this.selectedTravelMode = mode;
    this.initMap(); // recarga la ruta
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
          travelMode: this.selectedTravelMode
        };

        directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            directionsRenderer.setDirections(result);

            const leg = result.routes[0].legs[0];
            this.tiempoEstimado = `Distancia: ${leg.distance?.text} - Tiempo estimado: ${leg.duration?.text}`;
          } else {
            this.tiempoEstimado = null;
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
