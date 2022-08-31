import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from '../city/city.entity';
import { Location } from '../location/location.entity';
import { Users } from '../users/users.entity';

@Entity()
export class UsersLocation {
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

  @ManyToOne(() => Location, (table: Location) => table.id_location, {})
  @JoinColumn({ name: 'id_location' })
  id_location: Location;

  @ManyToOne(() => Users, (table: Users) => table.id_users_location, {})
  @JoinColumn({ name: 'id_users_location' })
  id_users_location: Users;
  
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