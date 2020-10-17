export interface RespuestaReporteMedidas {
  ok: boolean;
  reporteMedidas: ReporteMedida[];
}

export interface RespuestaReporteMedida {
  ok: boolean;
  reporteMedidaDb: ReporteMedida;
}

export interface ReporteMedida {
  valor: string;
  _id: string;
  reporte?: Reporte;
  itemCategoria?: ItemCategoria;
  __v?: number;
}

export interface ItemCategoria {
  _id: string;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
}

export interface Categoria {
  _id: string;
  descripcion: string;
}

export interface Reporte {
  activo?: boolean;
  _id: string;
}
