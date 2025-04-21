import { Pedido } from "../pedido/pedido";
import { Producto } from "../producto/producto";

export interface ItemPedido {
    id: number;
    pedido:Pedido;
    producto:Producto;
    cantidad: number;
    precioUnitario: number;
    
}
