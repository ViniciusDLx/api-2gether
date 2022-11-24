import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Inventory } from '../entities/Inventory.entity';

@Injectable()
export default class ListInventoryService {
    public constructor(
        @InjectRepository(Inventory)
        private shopListRepository: Repository<Inventory>
    ) {}

    public async execute(): Promise<any> {
        const items = await this.buildQuery();

        return items;
    }

    private async buildQuery() {
        const builder = this.shopListRepository
            .createQueryBuilder('inventory')
            .where({ deletedAt: IsNull() })
            .orderBy('inventory.ordination', 'ASC');

        const [data, total] = (await builder.getManyAndCount()) as any;

        return { data, meta: { total } };
    }
}
