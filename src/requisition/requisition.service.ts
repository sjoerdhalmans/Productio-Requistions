import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Requisition } from "src/entities/requisition.entity";
import { Repository } from "typeorm";


@Injectable()
export class RequisitionService {
    constructor(
        @InjectRepository(Requisition)
        private requisitionRepository: Repository<Requisition>,
    ) { }

    public async createRequisition() {

    }
}