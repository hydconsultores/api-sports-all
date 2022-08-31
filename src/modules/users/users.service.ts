import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
import { Users } from './users.entity';

// This should be a real class/interface representing a user entity
export type User = any;
const bcrypt = require("bcryptjs");
const rondasDeSal = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) { }

  async createAccount(body: UsersDto) {
    console.log("body")
    if (!body) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Body no coincide con el requerido',
        },
        400,
      );
    }

    return  await this.usersRepository.save(body);
  }
  
  async compareAsync(param1: string, param2: string) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(param1, param2, function(err, res) {
            if (err) {
                 reject(err);
            } else {
                 resolve(res);
            }
        });
    });
  }
  async logincigto(username: string, password: string): Promise<User | undefined> {
    const user =  await this.usersRepository
    .createQueryBuilder('users')
    .select('users')
    .innerJoinAndSelect('users.id_type_users', 'id_type_users')
    .innerJoinAndSelect('users.id_users','id_users')
    .innerJoinAndSelect('id_users.id_sports','id_sports')
    .where('users.status=:status', { status: 'ACTIVE' })
    .getMany();
    console.log("user",user)
    return user;
  }

  async login(username: string, password: string): Promise<User | undefined> {
    console.log("username",username)
    console.log("password",password)
    const user = await this.usersRepository.findOne({rut : username });
    console.log("user",user)
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Credenciales incorrectas',
        },
        400,
      );
    }
    /*
    HASEHO USAR AL CREAR
    bcrypt.hash(palabraSecretaTextoPlano, rondasDeSal, (err, palabraSecretaEncriptada) => {
      if (err) {
        console.log("Error hasheando:", err);
      } else {
        console.log("Y hasheada es: " + palabraSecretaEncriptada);
      }
    });
    */
    
    /*let compare = await this.compareAsync(password,user.password);
    if (compare == false) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Credenciales incorrectas',
        },
        400,
      );
    }*/
    
    return user;
  }
}