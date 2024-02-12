import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as request from 'request'
import { LocationService } from 'src/location/location.service';
import { WeatherDto } from './dto/weather.dto';
import { LocationDto } from 'src/location/dto/location.dto';

@Injectable()
export class WeatherService {
    private readonly logger = new Logger(WeatherService.name);

    constructor(
        private readonly locationService: LocationService
    ) { }

    async getWeatherForecast(id: number): Promise<WeatherDto> {
        try {
            const location: LocationDto = await this.locationService.findOne(id)
            if (!location) {
                throw new HttpException("Location not found", HttpStatus.NOT_FOUND)
            }
            let api_key = process.env.WEATHER_API_KEY
            let api_url = process.env.WEATHER_URL
            let url = `${api_url}?lat=${location.latitude}&lon=${location.longitude}&appid=${api_key}&units=metric`
            const options = {
                url: url,
                method: 'GET',
                json: true
            };

            return new Promise((resolve, reject) => {
                request(options, function (err, res, body) {
                    if (err || res?.statusCode != 200) {
                        reject(err || body?.message)
                    } else {
                        const weather = new WeatherDto()
                        weather.humidity = body.main.humidity
                        weather.name = body.name
                        weather.temperature = body.main.temp
                        weather.windSpeed = body.wind.speed
                        resolve(weather)
                    }
                });
            })
        } catch (error) {
            this.logger.error(error)
            throw new HttpException("Error while fetching weather details", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
