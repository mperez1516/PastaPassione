import { CarritoItem } from "../carrito/carrito-item";
import { Cliente } from "../cliente/cliente";

export interface Carro {
    id: number;
    cliente: Cliente | null; // Permitir null para usuarios no autenticados
    items: CarritoItem[];
}