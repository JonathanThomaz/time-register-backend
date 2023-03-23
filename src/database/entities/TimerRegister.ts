import { TimeRegister } from '../models/TimeRegister';
import { DataSourceConnection } from '../connection';

export default {
  findByCode: async (code: string) => {
    const timeRegisterRepository = DataSourceConnection.getRepository(TimeRegister);

    return await timeRegisterRepository.find({ where: [{ employee: { code: code } }] });
  },
  create: async (timeRegister: Partial<TimeRegister>) => {
    const timeRegisterRepository = DataSourceConnection.getRepository(TimeRegister);

    return await timeRegisterRepository.save(timeRegister);
  },
  update: async (timeRegister: Partial<TimeRegister>) => {
    const timeRegisterRepository = DataSourceConnection.getRepository(TimeRegister);

    await timeRegisterRepository
      .createQueryBuilder()
      .update(TimeRegister)
      .set({ endDateTime: timeRegister.endDateTime })
      .where('id = :id', { id: timeRegister.id })
      .execute();

    return await timeRegisterRepository.findOne({ where: [{ id: timeRegister.id }] });
  },
};
