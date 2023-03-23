import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TimeRegister } from './TimeRegister';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn('text')
  code: string;

  @Column('text')
  name: string;

  @OneToMany(() => TimeRegister, (timeRegister) => timeRegister.employee)
  timeRegister: TimeRegister[];
}
