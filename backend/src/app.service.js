import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import { GPSSummary } from './gpsSummary.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(GPSSummary) private readonly gpsSummaryRepository: Repository<GPSSummary>
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne(condition);
    }
    async getGpsSummary():Promise<GPSSummary[]>{
        const gpsData= await this.gpsSummaryRepository
        .createQueryBuilder("gpsSummary")
        .select("DISTINCT")
        .distinct()
        .orderBy('gpsSummary.timeStamp','DESC')
        .getMany();

        return gpsData;
    }
}
