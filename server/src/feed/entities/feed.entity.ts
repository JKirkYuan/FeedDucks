import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timeFed: Date;

  // @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}
