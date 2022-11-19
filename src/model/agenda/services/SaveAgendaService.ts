import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendaItems } from 'src/model/agendaItems/entities/AgendaItems.entity';
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

    private async buildQuery(params: { momento?: string; name: string }) {
        const builder = this.agendaRepository
            .createQueryBuilder('agenda')
            .where({ momento: params.momento });

        const agenda = await builder.getOne();

        console.log('itens -> ', agenda.agendaItems);

        agenda.agendaItems[0].name = params.name;

        return await this.agendaRepository.save(agenda);
    }
}
