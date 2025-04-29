import { Adicional } from "../adicional/adicional";
import { Carro } from "../carro/carro";
import { Producto } from "../producto/producto";

export interface CarritoItem {
    id: number;
    producto: Producto;
    cantidad: number;
    adicionales?: Adicional[];
}