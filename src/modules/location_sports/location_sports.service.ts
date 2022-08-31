import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationSports } from './location_sports.entity';

// This should be a real class/interface representing a user entity
export type User = any;
const bcrypt = require("bcryptjs");
const rondasDeSal = 10;
@Injectable()
export class LocationSportsService {
  constructor(
    @InjectRepository(LocationSports)
    private readonly locationSportsRepository: Repository<LocationSports>
  ) { }

}