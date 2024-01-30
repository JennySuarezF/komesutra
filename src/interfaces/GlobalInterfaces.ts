export interface DetalleComidas {
  nombre: string; precio: number; descripción: string; ingredientes: string; img: string;
}

export interface State { items: { comida: DetalleComidas, cantidad: number }[] }

export interface Comidas {
  Encebollados: DetalleComidas[],
  'Banderas KOME-SUTRA': DetalleComidas[],
  Ceviches: DetalleComidas[],
  Bollos: DetalleComidas[],
  Especialidades: DetalleComidas[],
  Bebidas: DetalleComidas[],
  Adicionales: DetalleComidas[]
}