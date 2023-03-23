import { Employee } from './models/Employee';
import { TimeRegister } from './models/TimeRegister';
import { DataSourceConnection } from './connection';

export default () => {
  const employeeRepository = DataSourceConnection.getRepository(Employee);

  employeeRepository.findOne({ where: [{ code: '4SXXFMf' }] }).then((result) => {
    if (!result) {
      const employee = new Employee();

      employee.code = '4SXXFMf';
      employee.name = 'Jonathan Thomaz';

      employeeRepository.save(employee).then((result) => {
        DataSourceConnection.createQueryBuilder()
          .insert()
          .into(TimeRegister)
          .values([
            {
              employee: result,
              startDateTime: '2022-12-10T00:00:00',
              endDateTime: '2022-12-10T07:31:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-12T00:00:00',
              endDateTime: '2022-12-12T07:30:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-13T00:00:00',
              endDateTime: '2022-12-13T07:30:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-14T00:00:00',
              endDateTime: '2022-12-14T07:30:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-15T00:00:00',
              endDateTime: '2022-12-15T07:30:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-16T00:00:00',
              endDateTime: '2022-12-16T07:30:00',
            },
            {
              employee: result,
              startDateTime: '2022-12-17T00:00:00',
              endDateTime: '2022-12-17T07:30:00',
            },
          ])
          .execute();
      });
    }
  });
};
