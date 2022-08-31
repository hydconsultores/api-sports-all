import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LocationSportsController } from './location_sports.controller';
import { LocationSports } from './location_sports.entity';
import { LocationSportsService } from './location_sports.service';

@Module({
  providers: [LocationSportsService],
  controllers: [LocationSportsController],
  exports: [LocationSportsService],
  imports:[ TypeOrmModule.forFeature([LocationSports]),
    forwardRef(() => AuthModule), 
  ]
})
export class LocationSportsModule {}