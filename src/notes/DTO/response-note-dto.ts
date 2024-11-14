import { notes_estado } from "@prisma/client";
import { IsEnum, IsString } from "class-validator";


export class ResponseNoteDto {
    @IsString()
    titulo : string;

    @IsString()
    responsable : string;

    @IsString()
    descripcion : string;

    @IsEnum(notes_estado)
    estado: notes_estado;

}
