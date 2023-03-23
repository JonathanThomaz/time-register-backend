import { Request, Response } from 'express';
import TimerRegister from '../database/entities/TimerRegister';
import { findCurrentRegister } from './functions/index';
import Employee from '../database/entities/Employee';

export default {
  async getByEmployeeCode(request: Request, response: Response) {
    const { code } = request.params;

    const registers = await TimerRegister.findByCode(code);

    return response.status(201).json({ result: registers });
  },

  async getCurrentDay(request: Request, response: Response) {
    const { code } = request.params;

    const registers = await TimerRegister.findByCode(code);

    const currentRegister = findCurrentRegister(registers);
    if (currentRegister) {
      return response.status(201).json({ result: currentRegister });
    }

    return response.status(201).json({ result: null });
  },

  async startTimeRegister(request: Request, response: Response) {
    const { code } = request.params;
    const { dateTime } = request.body;

    const registers = await TimerRegister.findByCode(code);

    const currentRegister = findCurrentRegister(registers);
    if (!currentRegister) {
      const employee = await Employee.findByCode(code);
      if (employee) {
        const timeRegister = await TimerRegister.create({ employee: employee, startDateTime: dateTime });
        return response.status(201).json({ result: timeRegister });
      }
      return response.status(403).json({ error: 'Não foi possivel encontrar um usuário' });
    }

    return response.status(403).json({ error: 'Usuário já registrou uma hora de entrada' });
  },

  async endTimeRegister(request: Request, response: Response) {
    const { code } = request.params;
    const { dateTime } = request.body;

    const registers = await TimerRegister.findByCode(code);

    const currentRegister = findCurrentRegister(registers);
    if (currentRegister && !currentRegister.endDateTime) {
      const employee = await Employee.findByCode(code);
      if (employee) {
        const timeRegister = await TimerRegister.update({ id: currentRegister.id, endDateTime: dateTime });
        return response.status(201).json({ result: timeRegister });
      }
      return response.status(403).json({ error: 'Não foi possivel encontrar um usuário' });
    }

    return response.status(403).json({ error: 'Usuário não pode registrar uma hora de saida' });
  },
};
