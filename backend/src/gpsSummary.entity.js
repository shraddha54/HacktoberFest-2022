import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('gpsSummary')
export class GPSSummary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deviceId: string;

    @Column()
    deviceType: string;

    @Column({type: "timestamp"})
    timeStamp: string;

    @Column()
    location: string;

}
