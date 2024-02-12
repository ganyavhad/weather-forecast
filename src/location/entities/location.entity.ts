import { AutoMap } from "@automapper/classes"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('location')
export class Location {

    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number

    @AutoMap()
    @Column()
    name: string

    @AutoMap()
    @Column()
    latitude: string

    @AutoMap()
    @Column()
    longitude: string

    @AutoMap()
    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date;

    @AutoMap()
    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;
}
