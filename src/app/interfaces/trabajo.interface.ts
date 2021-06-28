export interface ITrabajo{
    _id?: String | null,
    Titulo: string,
    Instrucciones : string,
    Presentaciones?:String[],
    FechaCreacion: Date,
    FechaEntrega: Date,
    FechaCierre?: Date | null,
    Categoria: string,
    Puntos: number,
    Archivos: IArchivos[],


  }
export interface IArchivos{
  _id?: String | null,
  Nombre: String,
  Tipo: String,
  Link: String

}
