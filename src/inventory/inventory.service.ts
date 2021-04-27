import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InventoryItem } from "src/entities/inventoryItem.entity";
import { Repository } from "typeorm";


@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(InventoryItem)
        private inventoryRepository: Repository<InventoryItem>,
    ) { }

    public async test() {
        
    }
}
