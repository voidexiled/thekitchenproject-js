export class Pedido {
    npedido: number;
    pedido: string;
    mesa: number;
    fecha: string;
    hora: string;

    constructor(npedido?: number, pedido?: string, mesa?: number, fecha?: string, hora?: string) {
        this.npedido = npedido || 0;
        this.pedido = pedido || '...x1';
        this.mesa = mesa || 0;
        this.fecha = fecha || '00/00/00';
        this.hora = hora || '12:00:00';
    }


}