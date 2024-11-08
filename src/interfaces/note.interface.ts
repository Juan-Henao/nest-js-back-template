export interface Note {
    titulo:string;
    responsable:string;
    descripcion:string;
    estado: 'pendiente'|'en_proceso'|'completado';
}