import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopListEntity } from '../entities/shopList.entity';

@Injectable()
export default class ListShopListService {
  public constructor(
    @InjectRepository(ShopListEntity)
    private shopListRepository: Repository<ShopListEntity>,
  ) {}

  public async execute(params: { id: number }): Promise<any> {
    const shopList = await this.buildQuery(params);

    return shopList;
  }

  private async buildQuery(params: { id: number }) {
    let builder = this.shopListRepository.createQueryBuilder('shop_list');

    if (params.id) {
      builder = builder.where({ id: params.id });
    }

    const [data, total] = (await builder.getManyAndCount()) as any;

    return { data, meta: { total } };
  }
}
