import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sports } from '../sports/sports.entity';
import { Location } from '../location/location.entity';

@Entity()
export class LocationSports {
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
 
  @ManyToOne(() => Sports, (table: Sports) => table.id_sports_location, {})
  @JoinColumn({ name: 'id_sports_location' })
  id_sports_location: Sports;

  @ManyToOne(() => Location, (table: Location) => table.id_location_location, {})
  @JoinColumn({ name: 'id_location_location' })
  id_location_location: Location;
  
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