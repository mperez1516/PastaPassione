import { Producto } from "../producto/producto";

export interface Adicional {
  adicional_id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  productos?:Producto[];
}