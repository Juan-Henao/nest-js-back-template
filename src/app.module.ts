import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/controllers/notes.controller';
import { NotesService } from './notes/services/notes.service';
import { PrismaService } from './prisma/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [

CacheModule.register({
  ttl: 5,
  max:100,
})

  ],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService, PrismaService],
})
export class AppModule {}
