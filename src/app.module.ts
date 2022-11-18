import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { Agenda } from './model/agenda/entities/Agenda.entity';
import ListAgendaService from './model/agenda/services/ListAgendaService';
import SaveAgendaService from './model/agenda/services/SaveAgendaService';
import { AgendaItems } from './model/agendaItems/entities/AgendaItems.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([Agenda, AgendaItems])
    ],
    controllers: [AppController],
    providers: [AppService, ListAgendaService, SaveAgendaService]
})
export class AppModule {}
