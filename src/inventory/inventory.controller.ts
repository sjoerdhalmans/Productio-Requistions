import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { InventoryService } from './inventory.service';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  private logger = new Logger('InventoryController');

  @MessagePattern('test_inv')
  async createInventoryItem() {
      // to be implemented
    }
}
