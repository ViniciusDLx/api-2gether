import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export default class ListUsersService {
  public constructor(
    @InjectRepository(UsersEntity)
    private invoiceRepository: Repository<UsersEntity>,
  ) {}

  public async execute(params: { id: number }): Promise<any> {
    const users = await this.buildQuery(params);

    return users;
  }

  private async buildQuery(params: { id: number }) {
    const builder = this.invoiceRepository
      .createQueryBuilder('users')
      .where({ id: params.id });

    const [data, total] = (await builder.getManyAndCount()) as any;

    return { data, meta: { total } };
  }
}
