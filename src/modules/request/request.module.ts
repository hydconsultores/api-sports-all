import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RequestController } from './request.controller';
import { Request } from './request.entity';
import { RequestService } from './request.service';

@Module({
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService],
  imports:[ TypeOrmModule.forFeature([Request]),
    forwardRef(() => AuthModule), 
  ]
})
export class RequestModule {}