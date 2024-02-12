import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  @Post()
  async create(@Body() locationDto: LocationDto): Promise<LocationDto> {
    try {
      return await this.locationService.create(locationDto);
    } catch (error) {
      throw error
    }
  }

  @Get()
  async findAll(): Promise<LocationDto[]> {
    try {
      return await this.locationService.findAll();
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LocationDto> {
    try {
      return await this.locationService.findOne(+id);
    } catch (error) {
      throw error
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() locationDto: LocationDto): Promise<LocationDto> {
    try {
      return await this.locationService.update(+id, locationDto);
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.locationService.remove(+id);
    } catch (error) {
      throw error
    }
  }
}
