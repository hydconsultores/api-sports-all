import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from '../location/location.entity';
import { Sports } from '../sports/sports.entity';
import { Type } from '../type/type.entity';
import { Users } from '../users/users.entity';

@Entity()
export class Request {
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

  @ManyToOne(() => Users, (table: Users) => table.id_users_request, {})
  @JoinColumn({ name: 'id_users_request' })
  id_users_request: Users;

  @ManyToOne(() => Type, (table: Type) => table.id_type, {})
  @JoinColumn({ name: 'id_type' })
  id_type: Type;

  @ManyToOne(() => Location, (table: Location) => table.id_location_request, {})
  @JoinColumn({ name: 'id_location_request' })
  id_location_request: Location;
  
  @ManyToOne(() => Sports, (sports: Sports) => sports.id_sports_request, {})
  @JoinColumn({ name: 'id_sports_request' })
  id_sports_request: Sports;

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