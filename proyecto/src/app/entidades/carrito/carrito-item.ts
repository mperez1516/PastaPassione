import { Carro } from "../carro/carro";
import { Producto } from "../producto/producto";

export interface CarritoItem {
    id: number;
    producto: Producto;
    cantidad: number;
}