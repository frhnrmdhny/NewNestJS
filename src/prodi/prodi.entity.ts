import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Prodi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
