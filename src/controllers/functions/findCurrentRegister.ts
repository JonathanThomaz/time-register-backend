import { isSameDay } from 'date-fns';
import { TimeRegister } from '../../database/models/TimeRegister';

export const findCurrentRegister = (registers: TimeRegister[]) => {
  return registers.find((value) => isSameDay(new Date(value.startDateTime), Date.now()));
};
