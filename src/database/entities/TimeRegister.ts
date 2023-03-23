import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Entity()
export class TimeRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  startDateTime: Date;

  @Column('date')
  endDateTime: Date | null;

  @ManyToOne(() => Employee, (employee) => employee.timeRegister)
  employee: Employee;
}
