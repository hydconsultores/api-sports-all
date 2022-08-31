import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersLocationController } from './users_location.controller';
import { UsersLocation } from './users_location.entity';
import { UsersLocationService } from './users_location.service';

@Module({
  providers: [UsersLocationService],
  controllers: [UsersLocationController],
  exports: [UsersLocationService],
  imports:[ TypeOrmModule.forFeature([UsersLocation]),
    forwardRef(() => AuthModule), 
  ]
})
export class UsersLocationModule {}