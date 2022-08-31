import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocationSports } from '../location_sports/location_sports.entity';
import { Request } from '../request/request.entity';
import { UsersSports } from '../users_sports/users_sports.entity';

@Entity()
export class Sports {
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
  
  @OneToMany(() => UsersSports, (usersSports: UsersSports) => usersSports.id_sports)
  id_sports: UsersSports[];

  @OneToMany(() => LocationSports, (locationSports: LocationSports) => locationSports.id_sports_location)
  id_sports_location: LocationSports[];

  @OneToMany(() => Request, (request: Request) => request.id_sports_request)
  id_sports_request: LocationSports[];

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