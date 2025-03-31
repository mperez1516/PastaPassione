import { Adicional } from "../adicional/adicional";

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    tipo: string;
    adicionales?: Adicional[];
  }