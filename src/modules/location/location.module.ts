import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LocationController } from './location.controller';
import { Location } from './location.entity';
import { LocationService } from './location.service';

@Module({
  providers: [LocationService],
  controllers: [LocationController],
  exports: [LocationService],
  imports:[ TypeOrmModule.forFeature([Location]),
    forwardRef(() => AuthModule), 
  ]
})
export class LocationModule {}