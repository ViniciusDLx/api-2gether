import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm';

@Entity('shoplist')
export class Shoplist {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'qtd' })
    qtd: number;

    @Column({ name: 'checked' })
    checked: boolean;

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
