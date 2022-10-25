import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Agenda } from '../../agenda/entities/Agenda.entity';

@Entity('agenda_items')
export class AgendaItems {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @ManyToOne(() => Agenda, (agenda) => agenda.agendaItems)
    @JoinColumn({ name: 'agenda_id' })
    public agenda: Agenda;
}
Agenda;
