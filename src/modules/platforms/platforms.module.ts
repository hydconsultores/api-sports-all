import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PlatformsController } from './platforms.controller';
import { Platforms } from './platforms.entity';
import { PlatformsService } from './platforms.service';

@Module({
  providers: [PlatformsService],
  controllers: [PlatformsController],
  exports: [PlatformsService],
  imports:[ TypeOrmModule.forFeature([Platforms]),
    forwardRef(() => AuthModule), 
  ]
})
export class PlatformsModule {}