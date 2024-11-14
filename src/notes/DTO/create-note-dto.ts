import { notes_estado } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";


export class CreateNoteDto {
    @IsString()
    @IsNotEmpty()
    titulo : string;

    @IsString()
    @IsNotEmpty()
    responsable : string;

    @IsString()
    descripcion : string;

    @IsEnum(notes_estado)
    estado: notes_estado;
}