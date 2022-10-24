import { AgendaItems } from 'src/model/agendaItems/entities/AgendaItems.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity('agenda')
export class Agenda {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'momento', type: 'varchar' })
    momento: string;

    @OneToMany(() => AgendaItems, (invoiceItem) => invoiceItem.agenda)
    public agendaItems: AgendaItems[];
}
