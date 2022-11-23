import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Shoplist } from '../entities/Shoplist.entity';

@Injectable()
export default class ListShopListService {
    public constructor(
        @InjectRepository(Shoplist)
        private shopListRepository: Repository<Shoplist>
    ) {}

    public async execute(): Promise<any> {
        const items = await this.buildQuery();

        return items;
    }

    private async buildQuery() {
        const builder = this.shopListRepository
            .createQueryBuilder('shopList')
            .where({ deletedAt: IsNull() })
            .orderBy('shopList.ordination', 'ASC');

        const [data, total] = (await builder.getManyAndCount()) as any;

        return { data, meta: { total } };
    }
}
