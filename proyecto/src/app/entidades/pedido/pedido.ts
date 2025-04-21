import { Cliente } from "../cliente/cliente";
import { Domiciliario } from "../domiciliario/domiciliario";
import { ItemPedido } from "../itemPedido/item-pedido";
import { Operador } from "../operador/operador";

export interface Pedido {
    pedidoID: number;
    cliente:Cliente;
    operador:Operador;
    domiciliario:Domiciliario;
    estado:String;
    direccionEnvio:String;
    fecha:Date;
    items?:ItemPedido[]
}