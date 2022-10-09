import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import ListUsersService from './model/services/ListUsersService';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(ListUsersService)
    private listUsersService: ListUsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('listUsers/:id(\\d+)')
  public async listUsers(
      @Param() params: { id: number },
  ) {
    try {
      const data = await this.listUsersService.execute(params);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
