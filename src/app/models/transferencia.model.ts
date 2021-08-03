export interface Transferencia {
  id?:      string;
  valor:   number;
  destino: string | number;
  data?:    Date;
}
