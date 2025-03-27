import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit, AfterViewInit {
  // Usamos caruselItemsData para la definición de los ítems del carrusel
  caruselItemsData = [
    { image: 'assets/Imagenes/carruselPlatos/pasta1.jpg', info: 'Rigattoni con finas hierbas, salsa especial y toque de queso.' },
    { image: 'assets/Imagenes/carruselPlatos/pasta2.jpg', info: 'Raviolis a la boloñesa con especias y salsa artesanal.' },
    { image: 'assets/Imagenes/carruselPlatos/pasta3.jpg', info: 'Pasta italiana con lomo, queso encima y toque especial.' },
    { image: 'assets/Imagenes/carruselPlatos/BolasPasta.png', info: 'Flores de spaghetti con hierbas, salsa casera y queso.' },
    { image: 'assets/Imagenes/carruselPlatos/carneRadiolis.png', info: 'Raviolis con parmesano, lomo en salsa italiana y especias.' },
    { image: 'assets/Imagenes/carruselPlatos/pizzaEspinaca.png', info: 'Pizza margarita con hierbas, queso cottage y jamón serrano.' }
  ];

  caruselItems!: NodeListOf<HTMLElement>;
  caruselContainer!: HTMLElement;
  prevButton!: HTMLElement;
  nextButton!: HTMLElement;

  currentIndex = 0;
  totalItems!: number;
  itemWidth!: number;
  itemGap!: number;
  totalItemWidth!: number;
  itemsVisible!: number;

  autoSlide: any;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.caruselContainer = document.querySelector('.carusel-container')!;
    this.caruselItems = document.querySelectorAll('.carusel-item');
    this.prevButton = document.querySelector('.prev')!;
    this.nextButton = document.querySelector('.next')!;

    this.totalItems = this.caruselItems.length;
    this.adjustItemWidth();
    this.addEventListeners();
  }

  adjustItemWidth(): void {
    this.itemWidth = this.caruselItems[0].getBoundingClientRect().width;
    this.itemGap = parseInt(getComputedStyle(this.caruselContainer).gap) || 0;
    this.totalItemWidth = this.itemWidth + this.itemGap;
    this.itemsVisible = Math.floor(this.caruselContainer.clientWidth / this.totalItemWidth);

    if (this.itemsVisible < 1) this.itemsVisible = 1;

    this.caruselItems.forEach((item: HTMLElement) => {
      item.style.minWidth = `${this.itemWidth}px`;
      item.style.overflow = 'visible'; // Aseguramos visibilidad
    });

    this.caruselContainer.style.overflow = 'visible'; // Aseguramos visibilidad
  }

  updateCaruselPosition(): void {
    const newPosition = -(this.totalItemWidth * this.currentIndex);
    this.caruselContainer.style.transform = `translateX(${newPosition}px)`;
    this.caruselContainer.style.transition = 'transform 0.5s ease-in-out';
  }

  moveToPrev(): void {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalItems - this.itemsVisible; // Va al último conjunto visible
    }
    this.updateCaruselPosition();
  }

  moveToNext(): void {
    if (this.currentIndex < this.totalItems - this.itemsVisible) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Regresa al primer conjunto
    }
    this.updateCaruselPosition();
  }

  addEventListeners(): void {
    this.prevButton.addEventListener('click', () => this.moveToPrev());
    this.nextButton.addEventListener('click', () => this.moveToNext());

    this.autoSlide = setInterval(() => this.moveToNext(), 5000);

    this.caruselContainer.addEventListener('mouseover', () => {
      clearInterval(this.autoSlide);
    });

    this.caruselContainer.addEventListener('mouseout', () => {
      this.autoSlide = setInterval(() => this.moveToNext(), 5000);
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustItemWidth();
  }

  goToMenu(): void {
    window.location.href = '/menu'; // O usa Router si prefieres Angular routing
  }
}
