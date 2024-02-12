import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LocationDto } from './dto/location.dto';
import { Location } from './entities/location.entity';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(LocationService.name);

  constructor(
    @InjectRepository(Location) private locationRepository: Repository<Location>,
    @InjectMapper() private readonly mapper: Mapper,
  ) { }

  async create(locationDto: LocationDto): Promise<LocationDto> {
    try {
      const location = this.mapper.map(locationDto, LocationDto, Location)
      return this.mapper.map(await this.locationRepository.save(location), Location, LocationDto)
    } catch (error) {
      this.logger.error(error)
      throw new HttpException("Error while saving locations", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll(): Promise<LocationDto[]> {
    try {
      return this.mapper.mapArray(await this.locationRepository.find(), Location, LocationDto)
    } catch (error) {
      this.logger.error(error)
      throw new HttpException("Error while fetching location", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findOne(id: number): Promise<LocationDto> {
    try {
      return this.mapper.map(await this.locationRepository.findOneBy({ id: id }), Location, LocationDto)
    } catch (error) {
      this.logger.error(error)
      throw new HttpException("Error while fetching location", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(id: number, locationDto: LocationDto): Promise<LocationDto> {
    try {
      const oldLocation = await this.locationRepository.findOneBy({ id: id })
      if (!oldLocation) {
        throw new HttpException("Location Not Found", HttpStatus.NOT_FOUND)
      }
      const newLocation = Object.assign(oldLocation, this.mapper.map(locationDto, LocationDto, Location))
      return this.mapper.map(await this.locationRepository.save(newLocation), Location, LocationDto)
    } catch (error) {
      this.logger.error(error)
      throw new HttpException("Failed to update location", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async remove(id: number): Promise<string> {
    try {
      await this.locationRepository.delete({ id: id })
      return 'deleted successfully'
    } catch (error) {
      this.logger.error(error)
      throw new HttpException("Failed to delete location", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
