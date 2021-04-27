import { IsNumber, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity({name: 'inventory'})
export class InventoryItem {
  @IsString()
  type: string;

  @IsNumber()
  itemId: number;

  @IsNumber()
  quantity: number;
}
