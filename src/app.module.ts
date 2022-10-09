import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UsersEntity } from './model/entities/users.entity';
import ListUsersService from './model/services/ListUsersService';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([
      UsersEntity,
  ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ListUsersService
  ],
})
export class AppModule { }