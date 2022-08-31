import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from '../city/city.entity';
import { Location } from '../location/location.entity';
import { Users } from '../users/users.entity';

@Entity()
export class UsersCity {
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
  
  @ManyToOne(() => City, (table: City) => table.id_city_users, {})
  @JoinColumn({ name: 'id_city_users' })
  id_city_users: City;

  @ManyToOne(() => Users, (table: Users) => table.id_users_users, {})
  @JoinColumn({ name: 'id_users_users' })
  id_users_users: City;

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