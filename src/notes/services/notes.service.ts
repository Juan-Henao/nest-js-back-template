import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from 'src/interfaces/note.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from '../DTO/create-note-dto';
import { ResponseNoteDto } from '../DTO/response-note-dto';

@Injectable()
export class NotesService {
    constructor(private readonly prisma: PrismaService) {

    }

    async getAllNotes(): Promise<Note[]> {
        return this.prisma.notes.findMany();
    }

    async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
        return this.prisma.notes.create({
            data: {
                titulo: createNoteDto.titulo,
                responsable: createNoteDto.responsable,
                descripcion: createNoteDto.descripcion,
                estado: createNoteDto.estado
            }
        }
        );
    }

    async getNoteById(id: number): Promise<ResponseNoteDto | null> {
        const note = await this.prisma.notes.findUnique({
            where: { id }
        })
        if (!note) {
            throw new
                NotFoundException(`Nota con ID ${id} no encontrada`);
        }

        return {
            titulo: note.titulo,
            descripcion: note.descripcion,
            estado: note.estado,
            responsable: note.responsable
        };
    }
}
