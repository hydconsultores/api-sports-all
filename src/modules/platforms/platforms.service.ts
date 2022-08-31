import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlatformsDto } from './platforms.dto';
import { Platforms } from './platforms.entity';

// This should be a real class/interface representing a user entity
export type User = any;
const bcrypt = require("bcryptjs");
const rondasDeSal = 10;
@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platforms)
    private readonly platformsRepository: Repository<Platforms>
  ) { }


}