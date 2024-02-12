import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Location } from './entities/location.entity';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { LocationProfile } from '../profile/location.profile';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location])
  ],
  controllers: [LocationController],
  providers: [
    LocationService,
    LocationProfile
  ]
})
export class LocationModule { }
