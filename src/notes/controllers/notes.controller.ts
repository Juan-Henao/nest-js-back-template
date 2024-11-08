import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { Note } from 'src/interfaces/note.interface';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService){}

    @Get()
    async getAllNotes(): Promise<Note[]>{
        return this.notesService.getAllNotes();
    }

    @Post()
    async createNote(@Body() noteData:Note): Promise<Note>{
        return this.notesService.createNote(noteData);

    }
}
