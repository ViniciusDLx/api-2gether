import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agenda } from '../entities/Agenda.entity';

@Injectable()
export default class SaveAgendaService {
    public constructor(
        @InjectRepository(Agenda)
        private agendaRepository: Repository<Agenda>
    ) {}

    public async execute(params: {
        momento?: string;
        name: string;
    }): Promise<any> {
        const users = await this.buildQuery(params);

        return users;
    }

    // TODO SALVAR NOVA DATA
    private async buildQuery(params: { momento?: string; name: string }) {
        console.log('params -> ', params);
        // const builder = this.agendaRepository
        //     .createQueryBuilder('agenda')
        //     .leftJoinAndSelect('agenda.agendaItems', 'agendaItems');
        // if (params.id) {
        //     builder.andWhere({ id: params.id });
        // }
        // if (params.day) {
        //     builder.andWhere({ momento: params.day });
        // }
        // const [data, total] = (await builder.getManyAndCount()) as any;
        // return { data, meta: { total } };
    }
}
