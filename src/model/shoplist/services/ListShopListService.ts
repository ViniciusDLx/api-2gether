import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoplist } from '../entities/Shoplist.entity';

@Injectable()
export default class ListShopListService {
    public constructor(
        @InjectRepository(Shoplist)
        private agendaRepository: Repository<Shoplist>
    ) {}

    public async execute(): Promise<any> {
        const items = await this.buildQuery();

        return items;
    }

    private async buildQuery() {
        const builder = this.agendaRepository.createQueryBuilder('shopList');

        const [data, total] = (await builder.getManyAndCount()) as any;

        return { data, meta: { total } };
    }
}
