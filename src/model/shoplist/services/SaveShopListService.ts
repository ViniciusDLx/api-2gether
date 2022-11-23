import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoplist } from '../entities/Shoplist.entity';

@Injectable()
export default class SaveShopListService {
    public constructor(
        @InjectRepository(Shoplist)
        private shopListRepository: Repository<Shoplist>
    ) {}

    public async execute(params: {
        name: string;
        id: string;
        qtd: string;
        remove?: string;
    }): Promise<any> {
        const newShopList = await this.buildQuery(params);

        return newShopList;
    }

    private async buildQuery(params: {
        name: string;
        id: string;
        qtd: string;
        remove?: string;
    }) {
        const shopList = new Shoplist();

        if (params.id) {
            shopList.id = params.id;
        }

        if (params.remove && params.id) {
            await this.shopListRepository.remove(shopList);
            return;
        } else if (params.remove) {
            return;
        }

        shopList.qtd = +params.qtd;
        shopList.name = params.name;

        return await this.shopListRepository.save(shopList);
    }
}
