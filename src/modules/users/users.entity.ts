import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Request } from '../request/request.entity';
import { TypeUsers } from '../type_users/type_users.entity';
import { UsersCity } from '../users_city/users_city.entity';
import { UsersLocation } from '../users_location/users_location.entity';
import { UsersSports } from '../users_sports/users_sports.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    name: 'rut',
  })
  rut: string;

  @Column('text', {
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column('text', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'lastname',
  })
  lastname: string;

  @Column('text', {
    nullable: false,
    name: 'phone',
  })
  phone: string;

  @Column('text', {
    nullable: false,
    name: 'mail',
  })
  mail: string;

  
  @ManyToOne(() => TypeUsers, (table: TypeUsers) => table.id_type_users, {})
  @JoinColumn({ name: 'id_type_users' })
  id_type_users: TypeUsers[];

  @OneToMany(() => UsersSports, (usersSports: UsersSports) => usersSports.id_users)
  id_users: UsersSports[];

  @OneToMany(() => Request, (request: Request) => request.id_users_request)
  id_users_request: Request[];

  @OneToMany(() => UsersCity, (usersCity: UsersCity) => usersCity.id_users_users)
  id_users_users: UsersCity[];

  @OneToMany(() => UsersLocation, (usersLocation: UsersLocation) => usersLocation.id_users_location)
  id_users_location: UsersLocation[];
  
  @Column('enum', {
    nullable: false,
    default: 'ACTIVE',
    enum: ['ACTIVE','DESACTIVE', 'DELETED'],
    name: 'status',
  })
  status: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'now()',
    name: 'created_at',
  })
  created_at: Date;

  @Column('timestamp', {
    nullable: true,
    name: 'updated_at',
  })
  updated_at: Date | null;

  
}