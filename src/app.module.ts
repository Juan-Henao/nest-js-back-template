import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/controllers/notes.controller';
import { NotesService } from './notes/services/notes.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService, PrismaService],
})
export class AppModule {}
