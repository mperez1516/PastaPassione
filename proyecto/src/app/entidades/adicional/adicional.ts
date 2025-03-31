import { Producto } from "../producto/producto";

export interface Adicional {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  productos?:Producto[];
}