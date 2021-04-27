import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Requisition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created: Date;

  @Column()
  OrderedItem: string;

  @Column()
  Quantity: Number;

  @Column()
  Requester: string;

  @Column()
  Department: string
}
