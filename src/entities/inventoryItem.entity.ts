import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'inventory'})
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  itemId: number;

  @Column()
  quantity: number;
}
