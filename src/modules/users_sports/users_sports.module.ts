import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersSportsController } from './users_sports.controller';
import { UsersSports } from './users_sports.entity';
import { UsersSportsService } from './users_sports.service';

@Module({
  providers: [UsersSportsService],
  controllers: [UsersSportsController],
  exports: [UsersSportsService],
  imports:[ TypeOrmModule.forFeature([UsersSports]),
    forwardRef(() => AuthModule), 
  ]
})
export class UsersSportsModule {}