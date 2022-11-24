import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from 'src/model/inventory/entities/Inventory.entity';
import SaveInventoryService from 'src/model/inventory/services/SaveInventoryService';
import { Repository } from 'typeorm';
import { Shoplist } from '../entities/Shoplist.entity';

@Injectable()
export default class SaveShopListService {
    public constructor(
        @InjectRepository(Shoplist)
        private shopListRepository: Repository<Shoplist>,
        @Inject(SaveInventoryService)
        private saveInventoryService: SaveInventoryService
    ) {}

    public async execute(params: {
        name: string;
        id: string;
        qtd: string;
        checked: boolean;
        ordination: string;
        remove?: string;
    }): Promise<any> {
        try {
            const newShopList = await this.buildQuery(params);

            return newShopList;
        } catch (error) {
            throw error;
        }
    }

    private async buildQuery(params: {
        name: string;
        id: string;
        qtd: string;
        checked: boolean;
        ordination: string;
        remove?: string;
    }) {
        try {
            const shopList = new Shoplist();

            if (params.id) {
                shopList.id = params.id;
            }

            console.log('PARAMS -> ', params.remove, params.id);

            if (params.remove && params.id) {
                await this.shopListRepository.remove(shopList);
                return;
            } else if (params.remove) {
                return;
            }

            shopList.qtd = +params.qtd;
            shopList.name = params.name;
            shopList.checked = params.checked;
            shopList.ordination = +params.ordination;

            if (params.checked) {
                shopList.deletedAt = new Date();

                const inventory = new Inventory();

                inventory.name = params.name;
                inventory.ordination = +params.ordination;
                inventory.qtd = +params.qtd;

                console.log('antes de enviar -> ', inventory);

                await this.saveInventoryService.execute(inventory);
            }

            console.log('shopList -> ', shopList);

            return await this.shopListRepository.save(shopList);
        } catch (error) {
            throw error;
        }
    }
}
