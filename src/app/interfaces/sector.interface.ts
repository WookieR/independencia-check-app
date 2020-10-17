export interface RespuestaSectores {
  ok: boolean;
  sectoresDb: Sector[];
}

export interface Sector {
  estaEliminado?: boolean;
  _id: string;
  nombre: string;
  maquina?: string;
  __v?: number;
  img?: string;
}
