import { Body, Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { adjustInventoryItem } from "src/DTO's/inventoryItem.dto";
import { InventoryService } from './inventory.service';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  private logger = new Logger('InventoryController');

  @MessagePattern('addInvItem')
  async addInventoryItem(@Body() inventoryItemDto: adjustInventoryItem) {
    this.inventoryService.addInventoryItem(inventoryItemDto)
  }

  @MessagePattern('removeInvItem')
  async removeInventoryItem(@Body() inventoryItemDto: adjustInventoryItem) {
    this.inventoryService.removeInventoryItem(inventoryItemDto);
  }
}