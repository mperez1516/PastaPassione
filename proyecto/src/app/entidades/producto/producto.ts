import { Adicional } from "../adicional/adicional";

export interface Producto {
    producto_id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    adicionales?: Adicional[];
  }