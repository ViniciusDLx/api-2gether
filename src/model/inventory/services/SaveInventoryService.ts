import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../entities/Inventory.entity';

@Injectable()
export default class SaveInventoryService {
    public constructor(
        @InjectRepository(Inventory)
        private inventoryRepository: Repository<Inventory>
    ) {}

    public async execute(params: Inventory): Promise<any> {
        console.log('antes');
        try {
            const newInventory = await this.buildQuery(params);

            return newInventory;
        } catch (error) {
            throw error;
        }
    }

    private async buildQuery(params: Inventory) {
        try {
            let inventory = new Inventory();

            if (params.id) {
                inventory = await await this.inventoryRepository.findOne({
                    where: { id: params.id }
                });
            }

            // console.log('PARAMS -> ', params.remove, params.id);

            // if (params.remove && params.id) {
            //     await this.inventoryRepository.remove(inventory);
            //     return;
            // } else if (params.remove) {
            //     return;
            // }

            console.log(
                'inventory.qtd, +params.qtd -> ',
                inventory.qtd,
                +params.qtd
            );

            inventory.qtd = inventory.qtd + +params.qtd;
            inventory.name = params.name;
            inventory.ordination = +params.ordination;

            console.log('inventory -> ', inventory);

            // return await this.inventoryRepository.save(inventory);
        } catch (error) {
            throw error;
        }
    }
}
