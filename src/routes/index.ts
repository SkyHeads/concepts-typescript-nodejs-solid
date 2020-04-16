import { Router } from 'express';

import appointmentRouter from './appointmentsRoutes';

const routes = Router();

routes.use('/appointments', appointmentRouter);

export default routes;
