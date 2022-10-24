import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import ListAgendaService from './model/agenda/services/ListAgendaService';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject(ListAgendaService)
        private listAgendaService: ListAgendaService
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('listAgenda/:id(\\d+)')
    public async listAgenda(@Param() params: { id: number }) {
        try {
            console.log('params -> ', params);
            const data = await this.listAgendaService.execute(params);

            return data;
        } catch (error) {
            console.log('error -> ', error);
            console.error(error);
        }
    }

    // @Get('listShopList/:id(\\d+)')
    // public async listShopList(@Param() params: { id: number }) {
    //     try {
    //         const data = await this.listUsersService.execute(params);

    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
}
