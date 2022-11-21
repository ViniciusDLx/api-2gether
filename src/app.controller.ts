import { Controller, Get, Inject, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import ListAgendaItemsService from './model/agenda/services/ListAgendaItemsService';
import ListAgendaService from './model/agenda/services/ListAgendaService';
import SaveAgendaItemsService from './model/agenda/services/SaveAgendaItemsService';
import SaveAgendaService from './model/agenda/services/SaveAgendaService';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject(ListAgendaService)
        private listAgendaService: ListAgendaService,
        @Inject(SaveAgendaService)
        private saveAgendaService: SaveAgendaService,
        @Inject(SaveAgendaItemsService)
        private saveAgendaItemsService: SaveAgendaItemsService,
        @Inject(ListAgendaItemsService)
        private listAgendaItemsService: ListAgendaItemsService
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/listAgenda')
    public async listAgenda(@Query() params: { id?: number; day?: string }) {
        try {
            console.log('params -> ', params);
            const data = await this.listAgendaService.execute(params);

            return data;
        } catch (error) {
            console.log('error -> ', error);
            console.error(error);
        }
    }

    @Post('/saveAgenda')
    public async saveAgenda(@Body() params: { momento: string }) {
        try {
            const newAgenda = await this.saveAgendaService.execute(params);

            return newAgenda;
        } catch (error) {
            console.log('error -> ', error);
            console.error(error);
        }
    }

    @Post('/saveAgendaItems')
    public async saveAgendaItems(
        @Body() params: { agendaId: string; name: string }
    ) {
        try {
            const newAgenda = await this.saveAgendaItemsService.execute(params);

            return newAgenda;
        } catch (error) {
            console.log('error -> ', error);
            console.error(error);
        }
    }

    @Get('/getItems')
    public async getItems(@Query() params: { momento: string }) {
        try {
            console.log('params -> ', params);
            const data = await this.listAgendaItemsService.execute(params);

            return data;
        } catch (error) {
            console.log('error -> ', error);
            console.error(error);
        }
    }
}
