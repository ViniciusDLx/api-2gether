import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { Agenda } from './model/agenda/entities/Agenda.entity';
import ListAgendaItemsService from './model/agendaItems/services/ListAgendaItemsService';
import ListAgendaService from './model/agenda/services/ListAgendaService';
import SaveAgendaItemsService from './model/agendaItems/services/SaveAgendaItemsService';
import SaveAgendaService from './model/agenda/services/SaveAgendaService';
import { AgendaItems } from './model/agendaItems/entities/AgendaItems.entity';
import SaveShopListService from './model/shoplist/services/SaveShopListService';
import { Shoplist } from './model/shoplist/entities/Shoplist.entity';
import ListShopListService from './model/shoplist/services/ListShopListService';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([Agenda, AgendaItems, Shoplist])
    ],
    controllers: [AppController],
    providers: [
        AppService,
        ListAgendaService,
        SaveAgendaService,
        SaveAgendaItemsService,
        ListAgendaItemsService,
        SaveShopListService,
        ListShopListService
    ]
})
export class AppModule {}
