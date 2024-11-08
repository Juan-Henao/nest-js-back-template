import { Injectable } from '@nestjs/common';
import { Note } from 'src/interfaces/note.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
    constructor(private readonly prisma: PrismaService){

    }

    async getAllNotes(): Promise<Note[]>{
        return this.prisma.notes.findMany();
    }

    async createNote(data:Note): Promise<Note>{
        return this.prisma.notes.create({data});
    }
}
