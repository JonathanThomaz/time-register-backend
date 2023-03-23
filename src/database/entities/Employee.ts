import { Employee } from '../models/Employee';
import { DataSourceConnection } from '../connection';

export default {
  findByCode: async (code: string) => {
    const employeeRegisterRepository = DataSourceConnection.getRepository(Employee);

    return await employeeRegisterRepository.findOne({ where: [{ code: code }] });
  },
};
