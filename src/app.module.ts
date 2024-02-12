import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    LocationModule,
    WeatherModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
