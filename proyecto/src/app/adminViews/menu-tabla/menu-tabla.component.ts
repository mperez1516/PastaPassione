import { Component } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
  styleUrls: ['./menu-tabla.component.css']
})
export class MenuTablaComponent {

  //Atributos 
  detalleProducto!: Producto;

  //Base de datos de productos
  productosList: Producto[] = [
    {
      id: 1,
      nombre: "Lasagna Boloñesa",
      precio: 20000,
      descripcion: "Lasagna Boloñesa con carne molida y salsa de tomate.",
      tipo: "Plato Principal"
    },
    {
      id: 2,
      nombre: "Spaghetti Carbonara",
      precio: 18000,
      descripcion: "Spaghetti con auténtica salsa carbonara.",
      tipo: "Plato Principal"
    },
    {
      id: 3,
      nombre: "Pizza Margherita",
      precio: 15000,
      descripcion: "Pizza clásica con mozzarella fresca y albahaca.",
      tipo: "Plato Principal"
    },
    {
      id: 4,
      nombre: "Ravioli de Ricotta y Espinacas",
      precio: 22000,
      descripcion: "Ravioli rellenos de ricotta y espinacas.",
      tipo: "Plato Principal"
    },
    {
      id: 5,
      nombre: "Penne al Pesto",
      precio: 17000,
      descripcion: "Penne con salsa pesto de albahaca y piñones.",
      tipo: "Plato Principal"
    },
    {
      id: 6,
      nombre: "Tiramisu",
      precio: 12000,
      descripcion: "Postre italiano con mascarpone y cacao.",
      tipo: "Postre"
    },
    {
      id: 7,
      nombre: "Risotto de Champiñones",
      precio: 19000,
      descripcion: "Risotto cremoso con champiñones frescos.",
      tipo: "Plato Principal"
    },
    {
      id: 8,
      nombre: "Calzone",
      precio: 16000,
      descripcion: "Pizza rellena de jamón y mozzarella.",
      tipo: "Plato Principal"
    },
    {
      id: 9,
      nombre: "Fettuccine Alfredo",
      precio: 21000,
      descripcion: "Fettuccine con salsa cremosa de parmesano.",
      tipo: "Plato Principal"
    },
    {
      id: 10,
      nombre: "Cannoli Siciliani",
      precio: 10000,
      descripcion: "Postre siciliano de masa crujiente rellena de ricotta.",
      tipo: "Postre"
    },
    {
      id: 11,
      nombre: "Pizza Pepperoni",
      precio: 17000,
      descripcion: "Pizza con pepperoni y queso mozzarella fundido.",
      tipo: "Plato Principal"
    },
    {
      id: 12,
      nombre: "Ossobuco",
      precio: 25000,
      descripcion: "Estofado de ternera con verduras y vino blanco.",
      tipo: "Plato Principal"
    },
    {
      id: 13,
      nombre: "Panna Cotta",
      precio: 9000,
      descripcion: "Postre cremoso de vainilla con salsa de frutos rojos.",
      tipo: "Postre"
    },
    {
      id: 14,
      nombre: "Minestrone",
      precio: 12000,
      descripcion: "Sopa de verduras con pasta y frijoles.",
      tipo: "Entrada"
    },
    {
      id: 15,
      nombre: "Arancini",
      precio: 11000,
      descripcion: "Bolitas de arroz rellenas de queso y ragú.",
      tipo: "Entrada"
    },
    {
      id: 16,
      nombre: "Zuppa Toscana",
      precio: 14000,
      descripcion: "Sopa con patatas, kale y chorizo en caldo cremoso.",
      tipo: "Entrada"
    },
    {
      id: 17,
      nombre: "Pizza Quattro Formaggi",
      precio: 19000,
      descripcion: "Pizza con mezcla de cuatro quesos italianos.",
      tipo: "Plato Principal"
    },
    {
      id: 18,
      nombre: "Tortellini en Brodo",
      precio: 16000,
      descripcion: "Tortellini rellenos de carne en caldo de pollo.",
      tipo: "Plato Principal"
    },
    {
      id: 19,
      nombre: "Carpaccio",
      precio: 15000,
      descripcion: "Láminas finas de carne cruda con parmesano.",
      tipo: "Entrada"
    },
    {
      id: 20,
      nombre: "Gelato",
      precio: 7000,
      descripcion: "Helado artesanal italiano en varios sabores.",
      tipo: "Postre"
    }
  ];

  //Metodos 
  editarProducto(producto: Producto) {
    this.detalleProducto = producto;
  }

  eliminarProducto(producto:Producto){
    this.productosList.splice(this.productosList.indexOf(producto), 1);
  }
  agregarProducto(producto: Producto) {
    this.productosList.push(producto);
  }



}
