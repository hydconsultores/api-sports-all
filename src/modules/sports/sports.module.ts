import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SportsController } from './sports.controller';
import { Sports } from './sports.entity';
import { SportsService } from './sports.service';

@Module({
  providers: [SportsService],
  controllers: [SportsController],
  exports: [SportsService],
  imports:[ TypeOrmModule.forFeature([Sports]),
    forwardRef(() => AuthModule), 
  ]
})
export class SportsModule {}