import { Injectable } from '@angular/core';
import { Adicional } from 'src/app/entidades/adicional/adicional';

@Injectable({
  providedIn: 'root'
})
export class AdicionalesService {

  private adicionales:Adicional[]=[
    { id: 1, nombre: "Queso Parmesano Extra", cantidad: 1, precio: 500 },
  { id: 2, nombre: "Salsa de Tomate Extra", cantidad: 2, precio: 300 },
  { id: 3, nombre: "Aceitunas Negras", cantidad: 1, precio: 400 },
  { id: 4, nombre: "Champiñones Salteados", cantidad: 2, precio: 600 },
  { id: 5, nombre: "Albahaca Fresca", cantidad: 1, precio: 200 },
  { id: 6, nombre: "Pepperoni Extra", cantidad: 3, precio: 700 },
  { id: 7, nombre: "Jalapeños", cantidad: 2, precio: 450 },
  { id: 8, nombre: "Queso Mozzarella Extra", cantidad: 1, precio: 550 },
  { id: 9, nombre: "Aceite de Oliva Virgen Extra", cantidad: 2, precio: 250 },
  { id: 10, nombre: "Pimientos Asados", cantidad: 1, precio: 350 },
  { id: 11, nombre: "Parmesano Rallado", cantidad: 2, precio: 500 },
  { id: 12, nombre: "Salsa de Trufa", cantidad: 1, precio: 1000 },
  { id: 13, nombre: "Alcaparras", cantidad: 3, precio: 400 },
  { id: 14, nombre: "Panceta Crujiente", cantidad: 1, precio: 700 },
  { id: 15, nombre: "Queso Ricotta", cantidad: 2, precio: 600 },
  { id: 16, nombre: "Chocolate Fundido", cantidad: 1, precio: 800 },
  { id: 17, nombre: "Pan Tostado", cantidad: 1, precio: 300 },
  { id: 18, nombre: "Chorizo Español", cantidad: 3, precio: 900 },
  { id: 19, nombre: "Pesto Genovés", cantidad: 1, precio: 650 },
  { id: 20, nombre: "Pimientos Rellenos", cantidad: 2, precio: 750 },
  { id: 21, nombre: "Jamón Serrano Extra", cantidad: 1, precio: 1000 },
  { id: 22, nombre: "Mariscos Extra", cantidad: 2, precio: 1500 },
  { id: 23, nombre: "Frutas Confitadas Extra", cantidad: 1, precio: 700 },
  { id: 24, nombre: "Azúcar Morena", cantidad: 1, precio: 300 },
  { id: 25, nombre: "Hojas de Menta", cantidad: 1, precio: 400 },
  { id: 26, nombre: "Doble Shot de Espresso", cantidad: 1, precio: 1000 },
  { id: 27, nombre: "Canela en Polvo", cantidad: 2, precio: 500 },
  { id: 28, nombre: "Salsa de Trufa", cantidad: 1, precio: 1200 },
  { id: 29, nombre: "Aceite de Oliva Extra Virgen", cantidad: 1, precio: 500 },
  { id: 30, nombre: "Chocolate Rallado", cantidad: 1, precio: 600 }
  ];

  getAdicionales(){
    return this.adicionales;
  }

  getAdicionalById(id:number){
    return this.adicionales.find(x => x.id == id);
  }

  addAdicional(adicional:Adicional){
    this.adicionales.push(adicional);
  }

  constructor() { }
}
