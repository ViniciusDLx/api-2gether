import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ShopListEntity } from './model/shopList/entities/shopList.entity';
import ListShopListService from './model/shopList/services/ListShopListService';
import { UsersEntity } from './model/users/entities/users.entity';
import ListUsersService from './model/users/services/ListUsersService';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([UsersEntity, ShopListEntity]),
  ],
  controllers: [AppController],
  providers: [AppService, ListUsersService, ListShopListService],
})
export class AppModule {}
