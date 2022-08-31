import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from '../city/city.entity';
import { LocationSports } from '../location_sports/location_sports.entity';
import { Platforms } from '../platforms/platforms.entity';
import { UsersLocation } from '../users_location/users_location.entity';
import { Request } from '../request/request.entity';

@Entity()
export class Location {
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
  
  @ManyToOne(() => City, (table: City) => table.id_city, {})
  @JoinColumn({ name: 'id_city' })
  id_city: City;

  @ManyToOne(() => Platforms, (table: Platforms) => table.id_plataforms, {})
  @JoinColumn({ name: 'id_plataforms' })
  id_plataforms: Platforms;

  @OneToMany(() => UsersLocation, (locations: UsersLocation) => locations.id_location)
  id_location: UsersLocation[];

  @OneToMany(() => LocationSports, (locationSports: LocationSports) => locationSports.id_location_location)
  id_location_location: LocationSports[];

  @OneToMany(() => Request, (request: Request) => request.id_location_request)
  id_location_request: Request[];

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