import { Router } from 'express';
import TimeRegister from '../controllers/TimeRegister';

const routes = Router();

routes.get('/health', (req, res) => {
  res.status(200).send('it is working');
});
routes.get('/time-register/:code', TimeRegister.getByEmployeeCode);
routes.get('/time-register/:code/current', TimeRegister.getCurrentDay);
routes.post('/time-register/:code/start', TimeRegister.startTimeRegister);
routes.post('/time-register/:code/end', TimeRegister.endTimeRegister);

export default routes;
