import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Kelas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  studentCount: number;
}
