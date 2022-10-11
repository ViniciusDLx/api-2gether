import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'age', type: 'int' })
  age: number;
}
