import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agenda } from '../entities/Agenda.entity';

@Injectable()
export default class ListAgendaItemsService {
    public constructor(
        @InjectRepository(Agenda)
        private agendaRepository: Repository<Agenda>
    ) {}

    public async execute(params: { momento: string }): Promise<any> {
        const items = await this.buildQuery(params);

        return items;
    }

    private async buildQuery(params: { momento: string }) {
        const builder = this.agendaRepository
            .createQueryBuilder('agendaItems')
            .leftJoinAndSelect('agenda.agendaItems', 'agendaItems');

        if (params.momento) {
            builder.andWhere({ momento: params.momento });
        }

        const [data, total] = (await builder.getManyAndCount()) as any;

        return { data, meta: { total } };
    }
}
