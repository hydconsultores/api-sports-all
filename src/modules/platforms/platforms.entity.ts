import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from '../location/location.entity';

@Entity()
export class Platforms {
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
    name: 'name',
  })
  name: string;

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

  @OneToMany(() => Location, (locations: Location) => locations.id_plataforms)
  id_plataforms: Location[];
  
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