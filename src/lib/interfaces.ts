export interface Cuadro {
    id: number;
    albumId: number;
    thumbnailUrl: string;
    title: string;
    url: string;
} 
export interface Filme {
    id: number;
    pais: string;
    formato: string;
    titulo: string;
    estrenooriginal: Date;
    estreno: Date;
    salida: Date;
    year: number;
    duracion: number;
}