import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CityController } from './city.controller';
import { City } from './city.entity';
import { CityService } from './city.service';

@Module({
  providers: [CityService],
  controllers: [CityController],
  exports: [CityService],
  imports:[ TypeOrmModule.forFeature([City]),
    forwardRef(() => AuthModule), 
  ]
})
export class CityModule {}