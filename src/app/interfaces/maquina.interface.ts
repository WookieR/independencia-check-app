export interface RespuestaMaquinas {
    ok: boolean;
    maquinasDb: Maquina[];
}

export interface Maquina {
    _id: string;
    nombre: string;
    estaEliminado?: boolean;
    __v?: number;
    img?: string;
}
