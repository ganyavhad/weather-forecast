import { AutoMap } from "@automapper/classes"
import { ApiProperty } from "@nestjs/swagger"

export class WeatherDto {

    @AutoMap()
    @ApiProperty({
        description: 'location name',
        example: "Mumbai"
    })
    name: string

    @AutoMap()
    @ApiProperty({
        description: 'Temperature',
        example: 27.05
    })
    temperature: string

    @AutoMap()
    @ApiProperty({
        description: 'Humidity',
        example: 34
    })
    humidity: string

    @AutoMap()
    @ApiProperty({
        description: 'Wind speed',
        example: 2.14
    })
    windSpeed: string
}
