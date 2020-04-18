import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/createAppointmentService';

const appointmentRouter = Router();

appointmentRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);

  const appointment = await appointmentsRepository.find();

  return response.json(appointment);
});

appointmentRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentRouter;
