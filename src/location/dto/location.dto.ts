import { AutoMap } from "@automapper/classes"
import { ApiProperty } from "@nestjs/swagger"

export class LocationDto {

    @AutoMap()
    @ApiProperty({
        description: 'Location ID',
        example: 1
    })
    id: number

    @AutoMap()
    @ApiProperty({
        description: 'Location Name',
        example: "Mumbai"
    })
    name: string

    @AutoMap()
    @ApiProperty({
        description: 'Latitude',
        example: "19.076208508867314"
    })
    latitude: string

    @AutoMap()
    @ApiProperty({
        description: 'longitude',
        example: "72.87094554365068"
    })
    longitude: string

    @AutoMap()
    @ApiProperty({
        description: 'created date',
        example: "2024-02-12T15:28:09.723Z"
    })
    createdAt: string

    @AutoMap()
    @ApiProperty({
        description: 'updated date',
        example: "2024-02-12T15:28:09.723Z"
    })
    updatedAt: string
}
