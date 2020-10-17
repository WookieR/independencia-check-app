export interface RespuestaItems {
  ok: boolean;
  itemsDb: Item[];
}

export interface Item {
    _id: string;
    nombre: string;
    estaEliminado?: boolean;
    sector?: string;
    __v?: number;
}
