import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Feed extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  food: string;

  @Column()
  location: string;

  @Column()
  duckCount: number;

  @Column()
  foodCount: number;

  @CreateDateColumn({ name: 'timeFed' })
  timeFed: Date;

  // @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}
