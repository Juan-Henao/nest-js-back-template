import { Body, Controller, Get, Param, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { Note } from 'src/interfaces/note.interface';
import { CreateNoteDto } from '../DTO/create-note-dto';
import { ResponseNoteDto } from '../DTO/response-note-dto';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('notes')
@UseInterceptors(CacheInterceptor)
export class NotesController {

    constructor(private readonly notesService: NotesService) { }

    @Get()
    @CacheTTL(60) //TIME TO LIVE -> Tiempo de Vida de el Cache es de 60 seg
    async getAllNotes(): Promise<Note[]> {
        return this.notesService.getAllNotes();
    }

    @Get(':id')
        async getNoteById(@Param('id') id: string):
        Promise<ResponseNoteDto | null> {
        const noteId = parseInt(id, 10)
        return this.notesService.getNoteById(noteId);
    }


    @Post()
    @UsePipes( new ValidationPipe())
    async createNote(@Body() noteData: CreateNoteDto): Promise<Note> {
        return this.notesService.createNote(noteData);
    }
}
