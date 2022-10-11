import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('shop_list')
export class ShopListEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'create_at' })
  createAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'delete_at', nullable: true })
  deleteAt: Date;

  @Column({ name: 'buyed' })
  buyed: boolean;

  @Column({ name: 'organized' })
  organized: number;
}
