export interface Actividad{
    _id?: number,            //<<<
    Tema: number,
    nombre: string,
    valor: number,
    tipo: number,
    cveTemaPreresiquisto: number,
    intentos: number,
    contenido: string
}

export interface QUIZ{
    _id?: number,            //<<<
    Tema: number,
    TipoPregunta: number,
    pregunta: string,
    valor: number,
    nivel: String
}