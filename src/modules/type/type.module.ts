import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TypeController } from './type.controller';
import { Type } from './type.entity';
import { TypeService } from './type.service';

@Module({
  providers: [TypeService],
  controllers: [TypeController],
  exports: [TypeService],
  imports:[ TypeOrmModule.forFeature([Type]),
    forwardRef(() => AuthModule), 
  ]
})
export class TypeModule {}