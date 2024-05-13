import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint', { nullable: false })
  tgId: number;

  @Column({ nullable: false })
  name: string;
}
