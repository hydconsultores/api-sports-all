import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersCityController } from './users_city.controller';
import { UsersCity } from './users_city.entity';
import { UsersCityService } from './users_city.service';

@Module({
  providers: [UsersCityService],
  controllers: [UsersCityController],
  exports: [UsersCityService],
  imports:[ TypeOrmModule.forFeature([UsersCity]),
    forwardRef(() => AuthModule), 
  ]
})
export class UsersCityModule {}