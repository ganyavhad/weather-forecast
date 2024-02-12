import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherDto } from './dto/weather.dto';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Get(':id')
    async getWeatherForecast(@Param('id') id: string): Promise<WeatherDto> {
        try {
            return await this.weatherService.getWeatherForecast(+id)
        } catch (error) {
            throw error
        }
    }
}
