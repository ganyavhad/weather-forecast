import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Location } from '../location/entities/location.entity'
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LocationService } from '../location/location.service';

@Module({
    imports: [TypeOrmModule.forFeature([Location])],
    controllers: [WeatherController],
    providers: [WeatherService, LocationService]
})
export class WeatherModule { }
