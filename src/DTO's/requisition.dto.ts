import { Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';
import { IsArray, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';

export class Order {
    @IsNumber()
    id: number;

    @IsDate()
    created: Date;

    @IsString()
    OrderedItem: string;

    @IsNumber()
    Quantity: Long;

    @IsString()
    Requester: string;

    @IsString()
    Department: string
}
