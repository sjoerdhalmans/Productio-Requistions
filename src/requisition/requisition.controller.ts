import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { RequisitionService } from './requisition.service';

@Controller()
export class RequisitionController {
    constructor(private readonly requisitionService: RequisitionService) { }

    private logger = new Logger('OrderController');
    //tes
    @MessagePattern('createRequisition')
    async createRequisition() {
        // to be implemented
    }

    @MessagePattern('deleteRequisition')
    async deleteRequisition() {
        // to be implemented
    }

    @Get('/getall')
    async getAll() {
        // to be implemented
    }
}

