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
import SaveInventoryService from './model/inventory/services/SaveInventoryService';
import { Inventory } from './model/inventory/entities/Inventory.entity';
import ListInventoryService from './model/inventory/services/ListInventoryService';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([Agenda, AgendaItems, Shoplist, Inventory])
    ],
    controllers: [AppController],
    providers: [
        AppService,
        ListAgendaService,
        SaveAgendaService,
        SaveAgendaItemsService,
        ListAgendaItemsService,
        SaveShopListService,
        ListShopListService,
        SaveInventoryService,
        ListInventoryService
    ]
})
export class AppModule {}
