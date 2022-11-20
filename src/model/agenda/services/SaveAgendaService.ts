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

    public async execute(params: { momento?: string }): Promise<any> {
        const newAgenda = await this.buildQuery(params);

        return newAgenda;
    }

    private async buildQuery(params: { momento?: string }) {
        const newAgenda = await this.agendaRepository.findOne({
            where: { momento: params.momento }
        });

        newAgenda.momento = params.momento;

        return await this.agendaRepository.save(newAgenda);
    }
}
