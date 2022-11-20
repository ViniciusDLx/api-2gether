import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendaItems } from 'src/model/agendaItems/entities/AgendaItems.entity';
import { Repository } from 'typeorm';
import { Agenda } from '../entities/Agenda.entity';

@Injectable()
export default class SaveAgendaItemsService {
    public constructor(
        @InjectRepository(AgendaItems)
        private agendaItemsRepository: Repository<AgendaItems>,
        @InjectRepository(Agenda)
        private agendaRepository: Repository<Agenda>
    ) {}

    public async execute(params: {
        moment: string;
        name: string;
    }): Promise<any> {
        const newAgenda = await this.buildQuery(params);

        return newAgenda;
    }

    private async buildQuery(params: { moment: string; name: string }) {
        const agenda = await this.agendaRepository.findOne({
            where: { momento: params.moment }
        });

        const itemAgenda = new AgendaItems();

        itemAgenda.agenda = agenda;
        itemAgenda.name = params.name;

        return await this.agendaItemsRepository.save(itemAgenda);
    }
}