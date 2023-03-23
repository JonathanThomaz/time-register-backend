import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Entity()
export class TimeRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  startDateTime: string;

  @Column('text', { default: null })
  endDateTime: string | null;

  @ManyToOne(() => Employee, (employee) => employee.timeRegister)
  employee: Employee;
}
