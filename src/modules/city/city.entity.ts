import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from '../location/location.entity';
import { UsersCity } from '../users_city/users_city.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'latitude',
  })
  latitude: string;

  @Column('text', {
    nullable: false,
    name: 'longitude',
  })
  longitude: string;
  
  @OneToMany(() => Location, (locations: Location) => locations.id_city)
  id_city: Location[];

  @OneToMany(() => UsersCity, (usersCity: UsersCity) => usersCity.id_city_users)
  id_city_users: UsersCity[];

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