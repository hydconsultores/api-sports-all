import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sports } from '../sports/sports.entity';
import { Users } from '../users/users.entity';

@Entity()
export class UsersSports {
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
 
  @ManyToOne(() => Sports, (table: Sports) => table.id_sports, {})
  @JoinColumn({ name: 'id_sports' })
  id_sports: Sports;

  @ManyToOne(() => Users, (table: Users) => table.id_users, {})
  @JoinColumn({ name: 'id_users' })
  id_users: Users;
  
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