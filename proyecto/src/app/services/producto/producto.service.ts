import { Injectable } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos:Producto[] = [
    { id: 1, nombre: "Lasagna Boloñesa", precio: 20000, descripcion: "Lasagna Boloñesa con carne molida y salsa de tomate.", tipo: "Plato Principal" },
    { id: 2, nombre: "Spaghetti Carbonara", precio: 18000, descripcion: "Spaghetti con auténtica salsa carbonara.", tipo: "Plato Principal" },
    { id: 3, nombre: "Pizza Margherita", precio: 15000, descripcion: "Pizza clásica con mozzarella fresca y albahaca.", tipo: "Plato Principal" },
    { id: 4, nombre: "Ravioli de Ricotta y Espinacas", precio: 22000, descripcion: "Ravioli rellenos de ricotta y espinacas.", tipo: "Plato Principal" },
    { id: 5, nombre: "Penne al Pesto", precio: 17000, descripcion: "Penne con salsa pesto de albahaca y piñones.", tipo: "Plato Principal" },
    { id: 6, nombre: "Tiramisu", precio: 12000, descripcion: "Postre italiano con mascarpone y cacao.", tipo: "Postre" },
    { id: 7, nombre: "Risotto de Champiñones", precio: 19000, descripcion: "Risotto cremoso con champiñones frescos.", tipo: "Plato Principal" },
    { id: 8, nombre: "Calzone", precio: 16000, descripcion: "Pizza rellena de jamón y mozzarella.", tipo: "Plato Principal" },
    { id: 9, nombre: "Fettuccine Alfredo", precio: 21000, descripcion: "Fettuccine con salsa cremosa de parmesano.", tipo: "Plato Principal" },
    { id: 10, nombre: "Cannoli Siciliani", precio: 10000, descripcion: "Postre siciliano de masa crujiente rellena de ricotta.", tipo: "Postre" },
    { id: 11, nombre: "Pizza Pepperoni", precio: 17000, descripcion: "Pizza con una base crujiente, salsa de tomate, queso mozzarella fundido y rodajas de pepperoni dorado.", tipo: "Plato Principal" },
    { id: 12, nombre: "Ossobuco", precio: 25000, descripcion: "Estofado de jarrete de ternera cocinado lentamente con vino blanco, verduras y hierbas aromáticas.", tipo: "Plato Principal" },
    { id: 13, nombre: "Panna Cotta", precio: 9000, descripcion: "Postre italiano cremoso y suave, elaborado con nata, vainilla y azúcar.", tipo: "Postre" },
    { id: 14, nombre: "Minestrone", precio: 12000, descripcion: "Sopa de verduras de temporada con pasta y frijoles, cocinada con hierbas aromáticas.", tipo: "Entrada" },
    { id: 15, nombre: "Arancini", precio: 11000, descripcion: "Bolitas de arroz rellenas de queso y ragú, empanizadas y fritas hasta quedar doradas.", tipo: "Entrada" },
    { id: 16, nombre: "Zuppa Toscana", precio: 14000, descripcion: "Sopa toscana con patatas, kale y chorizo en un caldo cremoso con un toque de ajo.", tipo: "Entrada" },
    { id: 17, nombre: "Pizza Quattro Formaggi", precio: 19000, descripcion: "Pizza con una mezcla de cuatro quesos: mozzarella, gorgonzola, parmesano y fontina.", tipo: "Plato Principal" },
    { id: 18, nombre: "Tortellini en Brodo", precio: 16000, descripcion: "Tortellini rellenos de carne en un caldo de pollo aromático.", tipo: "Plato Principal" },
    { id: 19, nombre: "Carpaccio", precio: 15000, descripcion: "Láminas finas de carne cruda marinadas con aceite de oliva, limón y queso parmesano.", tipo: "Entrada" },
    { id: 20, nombre: "Gelato", precio: 7000, descripcion: "Helado artesanal italiano con opciones de vainilla, chocolate o fresa.", tipo: "Postre" },
    { id: 21, nombre: "Pizza Prosciutto", precio: 18000, descripcion: "Pizza con jamón crudo (prosciutto) y rúcula fresca sobre una base crujiente con queso mozzarella.", tipo: "Plato Principal" },
    { id: 22, nombre: "Linguini Frutti di Mare", precio: 23000, descripcion: "Linguini con mariscos frescos en una salsa de tomate picante.", tipo: "Plato Principal" },
    { id: 23, nombre: "Panettone", precio: 14000, descripcion: "Pan dulce italiano con frutas confitadas y pasas. Esponjoso y perfecto para acompañar con un café o té.", tipo: "Postre" },
    { id: 24, nombre: "Espresso", precio: 4000, descripcion: "Café espresso italiano intenso y aromático, preparado con granos de café recién molidos.", tipo: "Bebida" },
    { id: 25, nombre: "Limoncello", precio: 9000, descripcion: "Licor italiano de limón elaborado artesanalmente con cáscaras de limón y alcohol puro.", tipo: "Bebida" },
    { id: 26, nombre: "Affogato", precio: 8000, descripcion: "Postre simple pero delicioso, hecho con una bola de helado de vainilla bañada con un shot caliente de espresso italiano.", tipo: "Postre" },
    { id: 27, nombre: "Cappuccino", precio: 5000, descripcion: "Café cappuccino con una base de espresso, leche vaporizada y espuma de leche espesa.", tipo: "Bebida" },
    { id: 28, nombre: "Tortellini con Salsa Alfredo", precio: 19500, descripcion: "Tortellini rellenos de queso en una cremosa salsa Alfredo con un toque de ajo.", tipo: "Plato Principal" },
    { id: 29, nombre: "Focaccia con Romero", precio: 9000, descripcion: "Pan italiano horneado con aceite de oliva y romero fresco, perfecto para acompañar cualquier comida.", tipo: "Entrada" },
    { id: 30, nombre: "Tartufo", precio: 15000, descripcion: "Helado italiano con un centro de chocolate derretido, cubierto con cacao en polvo.", tipo: "Postre" }
  
  ];
  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
  addProducto(producto: Producto) {
    this.productos.push(producto);
  }

}
