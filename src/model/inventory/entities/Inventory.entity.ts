import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm';

@Entity('inventory')
export class Inventory {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'qtd' })
    qtd: number;

    @Column({ name: 'ordination' })
    ordination: number;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @BeforeInsert()
    public setCreated() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    @BeforeInsert()
    public setUpdatedAt() {
        this.updatedAt = new Date();
    }
}
