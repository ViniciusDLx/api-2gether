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
    momento: string;

    @ManyToOne(() => Agenda, (agenda) => agenda.agendaItems)
    @JoinColumn({ name: 'invoice_id' })
    public agenda: Agenda;
}
Agenda;
