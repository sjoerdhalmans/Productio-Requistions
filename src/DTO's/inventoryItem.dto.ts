import { IsNumber, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity({name: 'inventory'})
export class createInventoryItem {
  @IsString()
  type: string;

  @IsNumber()
  itemId: number;

  @IsNumber()
  quantity: number;
}
